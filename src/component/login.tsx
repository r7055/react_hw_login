import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { FormEvent, useContext, useRef, useState } from 'react';
import { IsLogin, ThemeUser } from './homePage';



export default function Login() {
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

    const [open, setOpen] = useState(false);

    const userContext = useContext(ThemeUser)
    const [, setLogin] = useContext(IsLogin)

    const handleOpen = () => setOpen(true);
    const handleClose = () => {setOpen(false);}
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        userContext.userDispatch(
            {
                type: 'ADD_USER',
                data: {
                    email: email.current?.value,
                    password: password.current?.value
                }
            }
        )
        handleClose()
        setLogin(true)
    }

    return (
        <>
            <div>
                <Button onClick={handleOpen}>Login</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Enter your email and code
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <form onSubmit={handleSubmit}>
                                <div><TextField id="outlined-basic" inputRef={email} label="email" variant="outlined" /></div>
                                <div><TextField id="outlined-basic" inputRef={password} label="password" variant="outlined" /></div>
                                <div><Button type="submit">login</Button></div>
                            </form>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </>
    )
}
