import { useState } from "react";
import { storage } from "../../Utils/Firebase/index"

import camera from "../../Assets/camera.svg"
import { 
    AdminPanelContainer, 
    Header, 
    Input,
    Select, 
    Option, 
    SubTitle,
    FileLabel,
    FileInput,
    FileAlign,
    SeatCount,
    SeatPrice,
    GalleryWrapper
 } from "./AdminElements";

 interface IForm {
    companyName : string;
    busType : string;
    startTime : string;
    endTime : string;
    originCity: string;
    destinationCity : string;
    sleeper: number;
    sleeperPrice : number;
    seater : number;
    seaterPrice : number;
 }

 const initState: IForm = {
    companyName : "",
    busType : "",
    startTime : "",
    endTime : "",
    originCity: "",
    destinationCity : "",
    sleeper: 0,
    sleeperPrice : 0,
    seater : 0,
    seaterPrice : 0
 }

export const AdminPanel = () => {
    const [ index, setIndex ] = useState<number>(0);
    const [ form, setForm ] = useState<IForm>(initState);
    const [ imgLoc, setImgLoc ] = useState<string[]>(new Array(20).fill(null));
    const [ isUploading, setUploading ] = useState<boolean>(false);

    const BusTypes = ['', 'Luxury', 'AC', 'Sleeper']

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name] : value
        })
    }

    const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (e)=>{
        const value = e.target.value;
        setForm ({
            ...form,
            busType: value
        })
    }

    const handleImageUpdates: React.ChangeEventHandler<HTMLInputElement> | any = (e: any) => {
        setUploading(true)
        const updatedArray = imgLoc;
        const image = e.target.files[0];
        const uploadTask = storage.ref(`images/${image.name}`).put(image)
        uploadTask.on('state_changed', 
        (snapshot)=> {
            console.log(snapshot)
        }, 
        (error) => {
            console.log(error)
            setUploading(false)
            alert('Image upload failed, please retry')},
        () => {
          storage.ref('images').child(image.name).getDownloadURL().then(url =>{
            setUploading(false);
            updatedArray[index] = url;
            setImgLoc(updatedArray)
            setIndex(prev => prev + 1)
            })
        })
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        console.log('Prevented default and rendering recorded values')
        let seatTypeId = new Array(Number(form.sleeper) + Number(form.seater)).fill(1);
        seatTypeId = seatTypeId.map((item, i) => {
            return{
            seatNum : i < (Math.floor(seatTypeId.length/2)) ? 'L' + (i + 1) : 'U' + (i - Math.floor(seatTypeId.length/2) + 1),
            seatBerth : i < (Math.floor(seatTypeId.length/2)) ? 'L' : 'U',
            seatType : i < (Math.floor(seatTypeId.length/2)) && ((i + 1) % 5 === 0) ? 'sleeper' : 'sitting'
            }
        })

        const postData  = {
            companyName : form.companyName,
            priceId : {
                sleeper : Number(form.sleeperPrice),
                sitting : Number(form.seaterPrice)
            },
            busType : form.busType,
            seats : {
                totalSeats : Number(form.sleeper) + Number(form.seater),
                seatsBooked : 0,
                totalSleeperSeats : Number(form.sleeper),
                seatTypeId : seatTypeId
        },
            startTime : form.startTime,
            endTime : form.endTime,
            originCity : form.originCity,
            destinationCity : form.destinationCity,
            gallery : imgLoc?.filter(item => item === null ? false : true)
        }
        console.log(postData)
    }

    return(
    <AdminPanelContainer>
        <Header>
            Add Bus
        </Header>
        <form onSubmit = {handleSubmit}>
        <SubTitle>Enter your Company Name</SubTitle>
        <Input 
            type = "text" 
            name = "companyName"
            placeholder = "Bus Company"
            required
            onChange = {handleChange}
        />
        <SubTitle>Bus Type</SubTitle>
        <Select 
            name = "busType"
            onChange = {handleSelectChange} >
                {BusTypes.map((item, i) => <Option key = {i}>{item}</Option>)}
        </Select>
        <SubTitle>Date and Time of Departure</SubTitle>
        <Input 
            type = "datetime-local" 
            name = "startTime"
            required
            onChange = {handleChange}
        />
         <SubTitle>Date and Time of Arrival</SubTitle>
        <Input 
            type = "datetime-local" 
            name = "endTime"
            required
            onChange = {handleChange}
        />
        <SubTitle>Starting From</SubTitle>
        <Input 
            type = "text" 
            name = "originCity"
            required
            placeholder = "Origin City"
            onChange = {handleChange}
        />
        <SubTitle>Travelling till</SubTitle>
        <Input 
            type = "text" 
            required
            name = "destinationCity"
            placeholder = "Destination City"
            onChange = {handleChange}
        />
        <SubTitle>Seat Split Count and Pricing</SubTitle>
        <span>
        <SeatCount
            type = "number" 
            name = "sleeper"
            required
            placeholder = "Sleeper Berth"
            onChange = {handleChange}
        />
        <SeatPrice 
        name = "sleeperPrice"
        onChange = {handleChange}
        required
        placeholder = "Price in (&#8377;)"/>
        </span>
        <br/>
        <span>
        <SeatCount 
            type = "number" 
            name = "seater"
            required
            onChange = {handleChange}
            placeholder = "Seats"
        />
         <SeatPrice 
         name = "seaterPrice"
         required
         onChange = {handleChange}
         placeholder = "Price in (&#8377;)"/>
        </span>
        <br />
         <SubTitle>Photo Gallery (It's highly recommended to add atleast 2 Photos of the bus.)</SubTitle>
         {isUploading?<SubTitle>UPLOADING IMAGE...</SubTitle>:null}
         <GalleryWrapper>
            <FileAlign>
                {imgLoc?.map((item,i) => <FileLabel key = {i}><FileInput style = {{
                    backgroundImage :  `url(${item === null ?  camera : item})`,
                    backgroundRepeat : 'no-repeat',
                    backgroundPosition: "center",
                    backgroundSize: "80px 80px"
                }}>
                <input 
                type="file" 
                style = {{visibility:"hidden"}} 
                onChange = {handleImageUpdates}/>
                </FileInput>
                </FileLabel>)}
            </FileAlign>
        </GalleryWrapper>
        <br /><br /><br />
        <Input type = 'submit' value = 'ADD BUS' />
        </form>
    </AdminPanelContainer>
    );
}