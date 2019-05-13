import React, { Component } from 'react';
import styled from 'styled-components'
import anime from 'animejs';
import Typist from 'react-typist';

const Wrapper = styled.div`

    min-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white !important;
    color: black;
    position: relative;

    .type {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 200px;
        text-align: left;
    }
`

const DynamicItem = styled.div`

    height: 5vw;
    width: 5vw;
    background-color: black;
    opacity: 0;

`

const GridContainer = styled.div`

    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: absolute;
    flex-wrap: wrap;

`

const PictureCont = styled.div`

    min-height: 100vh;
    width: 100vw;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(img/${props=>(props.image)});
    position: absolute;
    z-index: 100;
    mix-blend-mode: screen;
    filter: blur(10px);

`  

class Fun extends Component {

    state = {
        animationRunning: false,
    }


    waveSequence(){

        var tl = anime.timeline({
            easing: 'easeOutExpo',
            duration: 750,
            begin: function(){

            },
            complete: function() {

            }
        });

        tl.add({

        })

    }

    runAnime() {


        var tl = anime.timeline({
            easing: 'easeOutExpo',
            duration: 750,
            complete: function () {
                // this.waveSequence()
            }
        });

        tl.add({
            targets: '.gridCont .el',
            scale: [
                { value: .1, easing: 'easeOutSine', duration: 500 },
                { value: 1, easing: 'easeInOutQuad', duration: 1200 }
            ],
            opacity: 1,
            delay: anime.stagger(200, { grid: [20, 10], from: 'center' })
        }, 7000).add({
            targets: ".pictureCont",
            backgroundSize: "120%",
            duration: 4000,
            filter: 'blur(0px)',
            opacity: 1,
            easing: 'linear',
        }, 7000).add({
            targets: ".wrapper",
            backgroundColor: "#000",
            easing: 'linear',
        }, 1000)

    }

    gridAnimation() {

        anime({
            targets: '.gridCont .el',
            scale: [
                { value: .1, easing: 'easeOutSine', duration: 200 },
                { value: 1, easing: 'easeInOutQuad', duration: 200 }
            ],
            delay: anime.stagger(100, { grid: [20, 10], from: 'center' }),
        }).add({
            targets: ".type",
            opacity: "0",
            duration: "1",
        });

    }


    componentDidMount() {
        console.log("Hey, thanks for visiting. Let me know if you want to work together, email me at kevin@everysf.com. Cheers")
        this.runAnime()

    }

    makeArr = () => {
        let arr = [];
        for (var i = 0; i < 220; i++) {
            arr.push(<DynamicItem className="el" />)
        }
        return arr
    }

    imageRotation = () => {
        return "ocean3.jpg"
    }

    cursor = {
        show: true,
        blink: true,
        element: '|',
        hideWhenDone: false,
        hideWhenDoneDelay: 1000,
      }

    render() {
        return (
            <Wrapper>
                <GridContainer className="gridCont">
                    {this.makeArr()}
                </GridContainer>
                <Typist className="type" cursor={this.cursor}>
                    What's the most effective way to get your story told on the web?
                </Typist>
                <PictureCont className="pictureCont" image={this.imageRotation}/>
            </Wrapper>
        );
    }

}

export default Fun;
