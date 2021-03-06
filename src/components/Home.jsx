import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components'
import anime from 'animejs';

const Wrapper = styled.div`

    margin: 20px;
    .header:hover {
        border: 1px solid #1de9b6;
        color: #1de9b6;
    }

    .box:hover {
        border: 1px solid #1de9b6;
        color: #1de9b6;
    }

    a {
        color: white;
        text-decoration: none;
    }

    a:hover{
       color: #1de9b6
    }

    .portfolioHeader:hover {
        color: white;
    }

    .desktopOnly {
        @meda (max-width: 800px) {
            display: none;
        }
    }

    h1 {
        font-weight: normal;
        font-size: 30px;
    }

    .fancyDude:hover {
        background-color: white;
    }

    .portfolioItem:hover {
        background-color: #1de9b6;
        color: #642cff;

        h1{
            color: white;
        }
        a {
            color: #642cff;
        }
        a:hover {
            margin-top: 5px;
            color: white;
        }

        .previewTiles {
            // background-color: #642cff;
        }

        .box1 {
            // border: 1px solid #642cff;
        }

        .jobcontent {
            border-top: 1px solid #642cff;
        }
    }

    @media (max-width: 500px) {
        .portfolioItem {
            padding: 20px;
        }

        .previewTiles {
            margin: 0;
            overflow: hidden;
        }
    }

    // .contactMe {
    //     display: none;
    //     margin-left: 20px;
    //     transition: 1s ease;
    //     opacity: 0;

    // }

    // .contactLink:hover ~ .contactMe {
    //     display: flex;
    //     opacity: 1
    // }

    .bio {
        animation: fadeIn 2s forwards;
      }
      
      @keyframes fadeIn {
      
          0%{
            filter: blur(20px);
            margin-top: 40px;
            opacity: 0;
            margin-bottom: 175px;
          }
          50%{
            opacity: 1;
          }
          100%{
            filter: blur(0px);
            margin-top: 60px;
            margin-bottom: 75px;
          }
      
      }
`

const FancyDude = styled.div`

    @media (max-width: 500px) {
        display: none;
    }

    img {
        width: 50px;
    }

    a {
        text-align: center;
    }

    opacity: 0;
    // box-shadow: 0 0 50px yellow;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 20px;
    margin: 10px;
    border: 1px solid white;
    a:hover{
        font-style: italic;
        letter-spacing: .2px;
    }
`

const InternalWrapper = styled.div`

    width: 100%;
    margin-bottom: 20px;


`

const Header = styled.div`  

    border: 1px solid white;
    height: 40px;
    display: flex;
    justify-content: space-between;
    text-align: center;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: white;
    
    }

    @media (max-width: 900px) {
        flex-direction: column;
        height: 160px;
        div {
            height: 60px;
        }
    }

    @media (max-width: 500px) {
        .bio {
            margin: 0 auto;
        }
    }

`

const Box = styled.div`

    // width: ${props => props.width + "px"};
    padding: 0 40px;
    border: ${props => (props.border ? "1px solid white" : "1px solid rgba(0,0,0,0)")};
    margin: -1px;

`

const GridItem1 = styled.div`

    height: 200px;
    border: 1px solid #1de9b6;

`

const Bio = styled.div`

    display: flex;
    justify-content: center;

    margin: 100px auto 75px;

    h1 {
        font-weight: normal;
        width: 400px;
        font-size: 30px;
        margin: auto 0 auto -100px;
        line-height: 50px;
        z-index: 100;
    }

    span {
        border-bottom: 3px solid #1de9b6;
    }

    span:hover {
        color: #1de9b6;
        border-bottom: 3px solid white;
    }
    
    @media (max-width: 500px) {
        flex-direction: column;
        margin: 25px auto 35px;
        h1 {
            margin: 0 auto;
            width: 100%;
            font-size: 20px;
            line-height: 30px;
        }
        .headshot {
            width: 100%;
            height: 300px;
            margin: 0px auto 20px;
        }
    }
`

const Headshot = styled.div`

    background-image: url(img/headshot2.jpg);
    height: 500px;
    width: 500px;
    background-size: cover;
    mix-blend-mode: difference;
`

const ScrollCont = styled.div`

    height: 75px;
    @media (max-width: 650px) {
        display: none;
    }

`

const ScrollDude = styled.div`

    width: 1px;
    margin: 0 auto;
    animation: scrollDude 1s infinite;
    background-color: #1de9b6;
    height: 75px;


    @keyframes scrollDude {
        0% {
            height: 0px;
            opacity: 0;
            background-color: #1de9b6

        },
        10% {
            opacity: 1
        },
        50% {
            background-color: white;
        },
        80% {
            opacity: 1
        },
        100% {
            height: 100px;
            opacity: 0;
            background-color: #1de9b6
        }
    }

`

const PortfolioHeader = styled.div`

    height: 30px;
    border: 5px solid #1de9b6;
    background-color: #1de9b6;
    color: #642cff;
    display: flex;
    justify-content: center;
    overflow: hidden;
    align-items: center;
    font-style: italic;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 30px;
    text-transform: uppercase;
    @media (max-width: 500px) {
        height: 50px;
        text-align: center;
        letter-spacing: 10px
    }

`

const PortfolioItem = styled.div`

    border: 1px solid #1de9b6;
    padding: 10px;
    display: flex;
    margin-top: -1px;
    position: relative;
    overflow: hidden;

    h1 {
        margin: 0 0 12px 0;
        font-weight: normal;
    }

    p {
        margin: 5px 0 0 0;
        padding-left: 40px;
    }

    a {
        padding-left: 40px;
    }

    .year {
        margin: 0px 10px 10px 10px;
    }

    .jobcontent {
        margin: 10px 10px 10px 10px;
        border-top: 1px solid #1de9b6;
        width: 100%;
        padding-top: 10px;
    }

    .backingText {
        z-index: 0;
        font-style: italic;
        letter-spacing: 30px;
        position: absolute;
        top: 50%;
        margin: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: .1;
        font-size: 150px;
        font-weight: normal;
    }

    .toolsUsed {
        padding: 5px;
        border: 1px solid #1de9b6;
    }

    .previewTiles {
        height: 100%;
        margin: 0 0 20px 0;
        z-index: 100;
        .box1 {
            width: 550px;
            height: 380px;
            background-image: url(img/${props => props.image});
            background-size: contain;
            background-position: right;
            background-repeat: no-repeat;
            border: 1px solid rgba(0,0,0,0);
        }
        .box1:hover {
            opacity: .7
        }

        a {
            padding: 0;
            margin: 0;
        }
    }

    @media (max-width: 1100px) {
        .previewTiles {
            .box1 {
                width: 300px;
                height: 240px;
            }
        }


    }

    @media (max-width: 900px) {
        // flex-direction: column;

        .previewTiles {
            display: flex;
            flex-direction: row-reverse;
        }

        a {
            padding-left: 0px;
        }
        p {
            padding-left: 0;
        }
    }

    @media (max-width: 650px) {
        flex-direction: column-reverse;

        .previewTiles {

            justify-content: center;

            .box1 {
                width: 300px;
                height: 200px;
                background-image: url(img/${props => props.mobileimage});
                background-position: center;
            }
        }

        .jobcontent {
            margin: 0;
        }

        .year {
            margin: 10px 0 0 0;
        }
    }

`

const Paper = styled.div`

    margin-top: 30px;
    margin-bottom: 30px;
    height: 75px;
    border: 1px solid #1de9b6;
    display: flex;
    justify-content: center;
    align-items: center;

    a:hover {
        font-style: italic;
        letter-spacing: 5px;
    }

`

const Education = styled.div`

    position: relative;
    border: 1px solid #1de9b6;
    text-align: center;
    font-size: 30px;

    p {
        padding: 80px;
        max-width: 7800px;
        margin: 0 auto;
        line-height: 50px;
        z-index: 30;
    }

    span {
        border-bottom: 3px solid #1de9b6;
    }

    span:hover {
        color: #1de9b6;
        border-bottom: 3px solid white;
    }

    margin-bottom: 30px;

    .backingText {
        z-index: 0;
        font-style: italic;
        letter-spacing: 30px;
        position: absolute;
        top: 50%;
        margin: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: .1;
        font-size: 200px;
        font-weight: normal;
    }
    
    @media (max-width: 500px) {
        font-size: 20px;
       p{
        line-height: 30px;
        padding: 20px;
        text-align: left;
       }

       .backingText{
           font-size: 80px;
           letter-spacing: 5px;
       }
    }


`

class Home extends Component {

    runAnime() {
        var tl = anime.timeline({
            easing: 'easeOutExpo',
            duration: 1750,
            loop: true,
        });

        tl.add(
            {
                targets: '.fancyDude',
                rotate: 360,
                delay: anime.stagger(200),
                easing: 'steps(5)',
            })
    }

    showExpLink() {
        var tl = anime.timeline({
            easing: 'easeOutExpo',
            duration: 1750,
        });

        tl.add({
            targets: ".fancyDude",
            opacity: "1",
            // boxShadow: "0 0 0px yellow",
            easing: 'steps(20)'
        }, 10000)
    }

    componentDidMount() {
        this.showExpLink()
        console.log("Hey, thanks for visiting. Let me know if you want to work together, email me at kevin@everysf.com. Cheers")
        // this.runAnime()
    }

    jobs = [
        {
            company: "The Orchard",
            year: "NOW",
            position: "Interactive Designer",
            link: "https://www.theorchard.com/",
            description: "Designing for Sony Music's largest independent music distributor to promote up and coming bands signed to major and independent record labels with physical and digital marketing strategies",
            image: "macbookmockupsweborch.png",
            mobileimage: "mobilemockuporch.png"
        },
        {
            
            company: "DesignCoin",
            year: "2019",
            position: "Developer, Designer, Branding",
            link: "https://designcoin.io/",
            description: "Leading a team of designers and developers in creating beautiful and engaging digital products. Creating UI/UX artboards, full website development, brand guides, sales collateral, and other design",
            image: "macbookmockupswebdc.png",
            mobileimage: "mobilemockupdc.png"
        },
        {
            company: "Aegis Crypto Custody",
            year: "2019",
            position: "Developer, Designer, UI/UX, Branding",
            link: "https://www.aegiscustody.com/",
            description: "Developed brand identity, designed website, created sales collateral, led UI/UX design of core product",
            image: "macbookmockupswebaegis.png",
            mobileimage: "mobilemockupaegis.png"
        },
        {
            company: "AlphaVoice // AlphaGrowth",
            year: "2018",
            position: "UI/UX, Branding, Designer, Developer",
            link: "https://www.alphavoice.io/",
            description: "Developed brand identity for crypto marketing agency, created digital and print assets, attended conferences with marketing team",
            image: "macbookmockupsweb.png",
            mobileimage: "mobilemockupav.png"
        },
        {
            company: "Portola Kitchen",
            year: "2018",
            position: "Developer, Designer, Branding",
            link: "https://portolakitchen.com/",
            description: "Designed and deployed website for $4 million dollar/year restaurant",
            image: "macbookmockupswebpk.png",
            mobileimage: "mobilemockuppk.png"
        },
        {
            company: "Snapchat Inc",
            year: "2017",
            position: "Content Analyst",
            link: "https://www.snapchat.com/",
            description: "Produced user facing media. Worked on the competitive content editing and curating team to develop and deploy 'SnapMaps' with senior engineers",
            image: "macbookmockupswebsc.png",
            mobileimage: "mobilemockupsc.png"
        },
        // {
        //     company: "Zammo.ai",
        //     year: "2019",
        //     position: "Voice UI/UX Researcher",
        //     link: "https://zammo.ai/",
        //     description: "Conducted research on 150+ websites to find use cases for voice technology-integrated artificial intelligence software",
        //     image: "macbookmockupswebzai.png",
        //     mobileimage: "mobilemockupzai.png"
        // },
        {
            company: "Parklets",
            year: "2019",
            position: "Developer, Designer, Branding",
            link: "https://parkletsband.com/",
            description: "Created website, marketing strategy, brand guides and design direction for San Francisco's New Indie-Softrock band: Parklets",
            image: "macbookmockupswebparklets.png",
            mobileimage: "mobilemockupparklets.png"
        },

    ]

    openExp() {
        var tl = anime.timeline({
            easing: 'easeOutExpo',
            duration: 900,
            complete: function () {
                window.location.href = '/exp'
            },

        })

        tl.add({
            targets: '.wrapper',
            filter: "blur(20px)",
        }).add({
        })
    }

    render() {
        return (
            <Wrapper className="wrapper">
                <Header className="header">
                    <Box className="box" width={400} border={true}><a className="contactLink" href="/exp">Kevin Macaraeg</a></Box>
                    <Box className="box" width={400} border={false}>San Francisco, California</Box>
                    <Box className="box" width={400} border={true}><a href="https://www.linkedin.com/in/sandiegokevin/">LinkedIn</a></Box>
                </Header>
                <InternalWrapper>
                    <Bio className="bio">
                        <Headshot className="headshot"></Headshot>
                        <h1><span className="el">Kevin Macaraeg</span> is an <span className="el">interactive designer</span> with a strong background in <span className="el">JavaScript</span>, <span className="el">UI/UX</span>, and <span className="el">marketing</span>.</h1>
                    </Bio>
                    <ScrollCont><ScrollDude />
                    </ScrollCont>
                    <Education>
                        <h1 className="backingText">HELLO</h1>
                        <p>Kevin studied full-stack <span>Web Development</span> at <span>UC Berkeley Extn</span> and <span>design</span> and <span>marketing</span> at <span>San Francisco State University</span>.<br /><br />He has worked in <span>big tech</span>, <span>start-ups</span>, <span>the federal government</span>, <span>cryptocurrencies</span>, <span>the music industry</span>, and everything in between.</p>
                    </Education>
                    <Paper><a href="/hello" className="desktopOnly">[ What is this? ]</a></Paper>
                    <PortfolioHeader className="portfolioHeader">EXPERIENCES</PortfolioHeader>

                    {this.jobs && this.jobs.map((jobs, i) => (
                        <PortfolioItem image={jobs.image} mobileimage={jobs.mobileimage} className="portfolioItem">
                            <div className="year">{jobs.year}</div>
                            <div className="jobcontent">
                                <h1>{jobs.position}</h1>
                                <a href={jobs.link}>{jobs.company}</a>
                                <p>{jobs.description}</p>
                            </div>
                            <div className="previewTiles">
                                <a href={jobs.link}>
                                    <div className="box1">
                                    </div>
                                </a>
                            </div>
                        </PortfolioItem>
                    ))}

                </InternalWrapper>
                <Paper><a href="mailto:kevin@everysf.com">Get In Touch</a></Paper>
                <FancyDude className="fancyDude" onClick={this.openExp}>
                    <a href="/exp">                    <img src="img/eye.svg" alt="" /><br />What is This?</a>
                </FancyDude>
            </Wrapper>
        );
    }

}

export default Home;
