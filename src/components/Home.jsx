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

const Footer = styled.div`

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

    componentDidMount() {
        console.log("Hey, thanks for visiting. Let me know if you want to work together, email me at kevin@everysf.com. Cheers")
        // this.runAnime()
    }

    render() {
        return (
            <Wrapper>
                <Header className="header">
                    <Box className="box" width={200} border={true}><a className="contactLink" href="/exp">Kevin Macaraeg</a></Box>
                    <Box className="box" width={400} border={false}>San Francisco-Based Front End
                    Designer</Box>
                    <Box className="box" width={400} border={true}><a href="https://www.linkedin.com/in/sandiegokevin/">LinkedIn</a></Box>
                </Header>
                <InternalWrapper>
                    <Bio className="bio">
                        <Headshot className="headshot"></Headshot>
                        <h1><span className="el">Kevin Macaraeg</span> is a <span className="el">front-end developer</span> with a strong background in <span className="el">design</span>, <span className="el">marketing</span>, and <span className="el">visual communications</span>.</h1>
                    </Bio>
                    <ScrollCont><ScrollDude />
                    </ScrollCont>
                    <Education>
                        <h1 className="backingText">HELLO</h1>
                        <p>Kevin studied full-stack <span>Web Development</span> at <span>UC Berkeley Extn.</span> and <span>design</span> and <span>marketing</span> at <span>San Francisco State University</span>.<br /><br />He has worked with <span>big tech</span>, <span>start-ups</span>, <span>cryptocurrencies</span>, <span>the federal government</span>, <span>independent record labels</span>, and contracting <span>on his own</span>. </p>

                    </Education>
                    <Footer><a href="/exp" className="desktopOnly">[ What is this? ]</a></Footer>
                    <PortfolioHeader className="portfolioHeader">EXPERIENCES</PortfolioHeader>
                    <PortfolioItem image={"macbookmockupswebdc.png"} mobileimage={"mobilemockupdc.png"} className="portfolioItem">
                        <div className="year">2019</div>
                        <div className="jobcontent">
                            <h1>Developer, Designer, Branding</h1>
                            <a href="https://designcoin.io/">DesignCoin.io</a>
                            <p>Leading a team of designers and developers in creating beautiful and engaging digital products. Creating UI/UX artboards, full website development, brand guides, sales collateral, and other design</p>
                        </div>
                        <div className="previewTiles">
                            <a href="https://designcoin.io/">
                                <div className="box1">
                                </div>
                            </a>
                        </div>
                    </PortfolioItem>
                    <PortfolioItem image={"macbookmockupswebaegis.png"} mobileimage={"mobilemockupaegis.png"} className="portfolioItem">
                        <div className="year">2019</div>
                        <div className="jobcontent">
                            <h1>Developer, Designer, UI/UX, Branding</h1>
                            <a href="https://www.aegiscustody.com/">Aegis Custody</a>
                            <p>Developed brand identity, designed website, created sales collateral, led UI/UX design of core product</p>
                        </div>
                        <div className="previewTiles">
                            <a href="https://www.aegiscustody.com/">
                                <div className="box1">
                                </div>
                            </a>
                        </div>
                    </PortfolioItem>
                    <PortfolioItem image={"macbookmockupsweb.png"} mobileimage={"mobilemockupav.png"} className="portfolioItem">
                        <div className="year">2019</div>
                        <div className="jobcontent">
                            <h1>Developer, Designer, UI/UX, Branding</h1>
                            <a href="https://www.alphavoice.io/">AlphaVoice // AlphaGrowth</a>
                            <p>Developed brand identity, designed web products, attended blockchain and crypto conferences with marketing team</p>
                        </div>
                        <div className="previewTiles">
                            <a href="https://alphavoice.io/">
                                <div className="box1">
                                </div>
                            </a>
                        </div>
                    </PortfolioItem>
                    <PortfolioItem mobileimage={"mobilemockupparklets.png"} image={"macbookmockupswebparklets.png"} className="portfolioItem">
                        <div className="year">2019</div>
                        <div className="jobcontent">
                            <h1>Developer, Designer, Branding</h1>
                            <a href="https://parkletsband.com/">Parklets</a>
                            <p>Created website, marketing strategy, brand guides and design direction for San Francisco's New Indie-Softrock band: Parklets</p>
                        </div>
                        <div className="previewTiles">
                            <a href="https://parkletsband.com/">
                                <div className="box1">
                                </div>
                            </a>
                        </div>
                    </PortfolioItem>
                    <PortfolioItem mobileimage={"mobilemockuppk.png"} image={"macbookmockupswebpk.png"} className="portfolioItem">
                        <div className="year">2018</div>
                        <div className="jobcontent">
                            <h1>Developer, Designer, Branding</h1>
                            <a href="https://portolakitchen.com/">Portola Kitchen</a>
                            <p>Designed and deployed website for $4 million dollar/year restaurant</p>
                        </div>
                        <div className="previewTiles">
                            <a href="https://portolakitchen.com/">
                                <div className="box1">
                                </div>
                            </a>
                        </div>
                    </PortfolioItem>
                    <PortfolioItem mobileimage={"mobilemockupsc.png"} className="portfolioItem" image={"macbookmockupswebsc.png"}>
                        <div className="year">2017</div>
                        <div className="jobcontent">
                            <h1>Content Analyst</h1>
                            <a href="https://www.snapchat.com/">Snapchat Inc</a>
                            <p>Produced user facing media. Worked on the competitive content editing and curating team to develop and deploy 'SnapMaps' with senior engineers</p>
                        </div>
                        <div className="previewTiles">
                            <a href="https://www.snapchat.com/">
                                <div className="box1">
                                </div>
                            </a>
                        </div>
                    </PortfolioItem>
                    <PortfolioItem mobileimage={"mobilemockupzai.png"} image={"macbookmockupswebzai.png"} className="portfolioItem">
                        <div className="year">2019</div>
                        <div className="jobcontent">
                            <h1>Voice UI/UX Researcher</h1>
                            <a href="https://zammo.ai/">Zammo.ai</a>
                            <p>Conducted research on 150+ websites to find use cases for voice technology-integrated artificial intelligence software</p>
                        </div>
                        <div className="previewTiles">
                            <a href="https://zammo.ai/">
                                <div className="box1">
                                </div>
                            </a>
                        </div>
                    </PortfolioItem>
                    <PortfolioItem mobileimage={"mobilemockuporch.png"} image={"macbookmockupsweborch.png"} className="portfolioItem">
                        <div className="year">2016</div>
                        <div className="jobcontent">
                            <h1>Marketing Representative</h1>
                            <a href="https://www.theorchard.com/">The Orchard</a>
                            <p>Worked with Sony Music's largest independent music distributor to promote up and coming bands signed to major record labels with physical and digital marketing strategies</p>
                        </div>
                        <div className="previewTiles">
                            <a href="https://www.theorchard.com/">
                                <div className="box1">
                                </div>
                            </a>
                        </div>
                    </PortfolioItem>
                </InternalWrapper>
                <Footer><a href="mailto:kevin@everysf.com">Get In Touch</a></Footer>
                <FancyDude className="fancyDude">
                    <a href="/exp">                    <img src="img/eye.svg" alt=""/><br/>What is This?</a>
                </FancyDude>
            </Wrapper>
        );
    }

}

export default Home;
