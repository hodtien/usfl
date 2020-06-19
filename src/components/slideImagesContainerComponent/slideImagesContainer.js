import React,{Component} from 'react'
import {SlideImage} from '../slideImagesComponent/sildeImages'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

export class SlideImagesContainer extends Component {
    render() {
        return (
            <Carousel showArrows={true}>
                <SlideImage serial='0' title='Library Closured Because of the Coronavirus (COVID-19)'/>
                <SlideImage serial='1' title='More Book More Fun - Keeping Streak With Us'/>
            </Carousel>
        )
    }
}