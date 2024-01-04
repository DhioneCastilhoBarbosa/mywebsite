import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';
import Image from "./Img";
import WorkIcon from '@mui/icons-material/Work';
//@ts-ignore
import background from "../assets/montanha.png"

export default function OutlinedTimeline() {
  
  return (
    <div className="experiencia relative w-screen h-auto md:h-screen" >
      <Image 
      className="absolute w-screen h-full "
      lq={background}
      src={background}
      
      />
      <div className=' relative max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-auto '>
        <div className='pt-16'>
          <p className='text-3xl font-bold inline border-b-4 border-cyan-400 md:text-6xl'>
            Experiências
          </p>
          <p className='py-4'>Estas são as minhas experiências.</p>

          <div className='mt-5 hover:scale-105 duration-1000'>
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align="right"
                  variant="body2"
                  color="#22d3ee"
                >
                  Mai de 2021


                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <WorkIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography variant="h6" component="span">
                    <strong >Intelbras S.A</strong>
                  </Typography>
                  <Typography>
                    Analista de Desenvolvimento de Produtos
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align="right"
                  variant="body2"
                  color="#22d3ee"
                >
                  Fev de 2021

                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot>
                    <WorkIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography variant="h6" component="span">
                    <strong>Dualbase Tecnologia</strong>
                  </Typography>
                  <Typography>
                    Analista de Desenvolvimento de Produtos nível 2
          </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align="right"
                  variant="body2"
                  color="#22d3ee"
                >
                  Jan de 2020
        </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot>
                    <WorkIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography variant="h6" component="span">
                    <strong>Dualbase Tecnologia</strong>
                  </Typography>
                  <Typography>
                    Analista de Desenvolvimento de Produtos nível 1
          </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align="right"
                  variant="body2"
                  color="#22d3ee"
                >
                  Fev de 2017
        </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot>
                    <WorkIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography variant="h6" component="span">
                    <strong>Dualbase Tecnologia</strong>
                  </Typography>
                  <Typography>Auxiliar de Desenvolvimento</Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align="right"
                  variant="body2"
                  color="#22d3ee"
                >
                  Jun de 2016
        </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot>
                    <WorkIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography variant="h6" component="span">
                    <strong>EatSmart</strong>
                  </Typography>
                  <Typography>Desenvolvedor</Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align="right"
                  variant="body2"
                  color="#22d3ee"
                >
                  Jul de 2012
        </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot>
                    <WorkIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography variant="h6" component="span">
                    <strong>IFSC</strong>
                  </Typography>
                  <Typography>Bolsa de Pesquisa</Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align="right"
                  variant="body2"
                  color="#22d3ee"
                >
                  Mar de 2010
        </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot>
                    <WorkIcon />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography variant="h6" component="span">
                    <strong> FastLogic-Segurança e Informatica</strong>
                  </Typography>
                  <Typography>Tecnico em Informatica</Typography>
                </TimelineContent>
              </TimelineItem>

            </Timeline>
          </div>
        </div>
      </div>




    </div>
  );
}
