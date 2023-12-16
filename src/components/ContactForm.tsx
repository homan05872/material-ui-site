import React, { useState } from 'react'
import { Box, Container, Grid, Typography, Button } from '@mui/material'
import { Stack, TextField, CircularProgress } from '@mui/material'
import { resolve } from 'path'

const ContactForm: React.FC = () => {

  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [emailSent, setEmailSent] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const sleep = (waitTime: number) => new Promise( resolve => setTimeout(resolve, waitTime));

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try{
      setIsSending(true);
      //送信する処理
      await sleep(2000);
      console.log("メールが送信されました。")
      //メール送信が終わった後
      setEmailSent(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSending(false);
    };
    console.log("送信されたメール：", email)
    console.log("送信されたメッセージ：", message)
  }

  return (
    <>
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
              <Typography component='h2' variant='h2'>
                Contact
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              {emailSent ? (
                <Box sx={{ width: '100%', textAlign: 'center' }}>
                  メールが送信されました。
                </Box>
              ) : (
                <Stack sx={{ width: '100%' }} component="form" spacing={2} onSubmit={handleSubmit} autoComplete='off'>
                    <TextField required fullWidth label="メールアドレス" name='email' variant="outlined" value={email} onChange={handleEmailChange} />
                    <TextField required fullWidth multiline rows={4} label="お問い合わせ内容" name='message' variant="outlined" value={message} onChange={handleMessageChange} />
                  {
                    isSending ? (
                      <Button variant='contained' color='primary'>
                        <CircularProgress/>
                      </Button>
                    ) : (
                      <Button type='submit' variant='contained' color='primary'>
                        送信
                      </Button>
                    )
                  }
                    
                </Stack>
              )}
              
            </Grid>
          </Grid>
    </>
  )
}

export default ContactForm