import React from 'react'

// 2021-04-12
// import ScrollToTop  from './component/tsTest/ScrollToTop'
import FirstHook from '../component/20210412/Hook'
import FavoriteMovies from '../component/20210412/UseState'
import UseEffect from '../component/20210412/UseEffect'

// 2021-06-05
import ParentRef from '../component/20210605/ParentRef'


export default function About() {
    return (
        <div className="my__component__wrapper">
            About page
            {/* hook 学习 */}
            <FirstHook />
            {/* <FirstHook />
            <FirstHook /> */}
            <FavoriteMovies />
            <UseEffect />

            <ParentRef />
        </div>
    )
}
