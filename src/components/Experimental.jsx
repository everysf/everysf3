import React, { Component } from 'react';
import styled from 'styled-components'
import anime from 'animejs';

const Wrapper = styled.div`

    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

`

const ArrCont = styled.div` 

    display: flex;
    align-items: center;
    overflow: hidden;

` 

const DynamicItem = styled.div`

    height: 500px;
    width: 10px;
    background-color: #bad897;
    opacity: 0;
    margin: 5px;

`

const Kevin = styled.div`

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    opacity:0 ;
    color: #bad897;;

    a{
        text-decoration: none;
        color: white;
    }

    a:hover {
        color: #bad897;;
    }

    cursor: pointer;

    z-index: 100
`

const Nav = styled.div`  

    border: 1px solid white;
    height: 40px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 50%;
    margin: 20px 0;
    transform: translateX(-50%);

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: white;
        padding: 0 20px;
        text-align: center;
    }

    @media (max-width: 900px) {

    }

    @media (max-width: 500px) {

    }

`

const Welcome = styled.div`

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    font-style: italic;

    z-index: 10;
`

class Experimental extends Component {

    state= {
        animationRunning: false,
    }

    runAnime() {


            var tl = anime.timeline({
                easing: 'easeOutExpo',
                duration: 750,
                // begin: function() {
                //     this.setState(() => {
                //         return {animationRunning: true};
                //       });
                // },
                complete: function() {
                    // window.location.href = '/'
                  }
              });
    
            tl.add(
                {
                  targets: '.container .el',
                  height: '500px',
                  margin: '5px',
                  width: "10px",
                  opacity: 1,
                  rotate: 0,
                  delay: anime.stagger(200),
                  easing: 'steps(5)',
                }).add({
                    targets: '.container .el',
                    height: "100px",
                    margin: "0px",
                    backgroundColor: "white",
                    delay: anime.stagger(10, {direction: 'reverse'}),
                    easing: 'cubicBezier(.5, .05, .1, 1)',
                }, '+=500').add({
                    targets: '.container .el',
                    height: "500px",
                    easing: 'cubicBezier(.5, .05, .1, 1)'
                }, '+=500').add({
                    targets: '.container .el',
                    margin: "20px",
                    delay: anime.stagger(10),
                    easing: 'cubicBezier(.5, .05, .1, 1)'
                }, '+=600').add({
                    targets: '.container .el',
                    margin: "0px",
                    width: "60px",
                    delay: anime.stagger(50, {direction: 'reverse'}),
                    easing: 'cubicBezier(.5, .05, .1, 1)'
                }).add({
                    targets: '.name',
                    letterSpacing: "5px",
                    opacity: 1,
                    easing: 'cubicBezier(.5, .05, .1, .3)',
                    color: "#bad897"
                }).add({
                    targets: '.container .el',
                    margin: "0px",
                    height: "0px",
                    width: "10px",
                    rotate: anime.stagger([-360, 360]),
                    easing: 'cubicBezier(.5, .05, .1, 1)'
                }, '-=500').add({
                    targets: '.name',
                    opacity: 0,
                }, 0).add({
                    targets: '.welcome',
                    opacity: '0'
                }, 13500).add({
                    targets: '.welcome',
                    opacity: '1'
                }, 0)

        

        var tl2 = anime.timeline({
            easing: 'easeOutExpo',
            duration: 750
          });

    }

    componentDidMount() {
        console.log("Hey, thanks for visiting. Let me know if you want to work together, email me at kevin@everysf.com. Cheers")
        this.runAnime()
    }

    makeArr = () => {
        let arr = [];
        for (var i = 0; i < 30; i++) {
          arr.push(<DynamicItem className="el"/>)
        }
        return arr
      }

    render() {
        return (
            <Wrapper>
                <ArrCont className="container">
                    {this.makeArr()}
                </ArrCont>
                <Kevin className="name">
                    <a href="/">KEVIN MACARAEG</a>
                </Kevin>
                <Welcome className="welcome">welcome</Welcome>
                <Nav>
                    <a>Made with AnimeJs</a>
                </Nav>
            </Wrapper>
        );
    }

}

export default Experimental;
