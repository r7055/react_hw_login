import { FormEvent, useContext, useRef, useState, useEffect } from "react"
import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { ThemeUser } from "./Navbar";
import { IsUpdate } from "./Avatar";

const updateDetails = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const firstName = useRef<HTMLInputElement>(null)
    const lastName = useRef<HTMLInputElement>(null)
    const phon = useRef<HTMLInputElement>(null)
    const address = useRef<HTMLInputElement>(null)

    const userContext = useContext(ThemeUser)
    const [,setIsUpdate]=useContext(IsUpdate)

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {setOpen(false);}
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        userContext.userDispatch(
            {
                type: 'UPDATE',
                data: {
                    firstName: firstName.current?.value,
                    lastName: lastName.current?.value,
                    email: email.current?.value,
                    password: password.current?.value,
                    address: address.current?.value,
                    phon: phon.current?.value
                }
            }
        )
        setIsUpdate(false)
        handleClose()
    }
    
    useEffect(() => {
        handleOpen()
    }, [])
    return (<>

        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Enter your details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <form onSubmit={handleSubmit}>
                            <div><TextField id="outlined-basic" inputRef={firstName} label="first name" variant="outlined" /></div>
                            <div><TextField id="outlined-basic" inputRef={lastName} label="last name" variant="outlined" /></div>
                            <div><TextField id="outlined-basic" inputRef={email} label="email" variant="outlined" /></div>
                            <div><TextField id="outlined-basic" inputRef={password} label="password" variant="outlined" /></div>
                            <div><TextField id="outlined-basic" inputRef={phon} label="phon" variant="outlined" /></div>
                            <div><TextField id="outlined-basic" inputRef={address} label="address" variant="outlined" /></div>
                            <div><Button type="submit">update</Button></div>
                        </form>
                    </Typography>
                </Box>
            </Modal>
        </div>
    </>)
}
export default updateDetails