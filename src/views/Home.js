import React from 'react'
import { Button, DatePicker } from "antd";
import Clock, {Toggle} from '@/Clock'

// 2021-04-05
import RState from '@/component/20210405/RState';
import RToggle from '@/component/20210405/RToggle';
// 2021-04-06
import Numlist from '@/component/20210406/RListKey';
import RForm from '@/component/20210406/RForm'
// 2021-04-07
import Calculator from '@/component/20210407/stateUp';
import WelcomeDialog from '@/component/20210407/comInherit'

export default function Home() {
    return (
        <div className="my__component__wrapper">
            Home page

            <Clock />
            <Toggle />

            <DatePicker />
            <Button type="primary" style={{ marginLeft: 8 }}>
            Primary Button
            </Button>
            {/* 20210405测试学习 */}
            <RState />
            <RToggle />
            {/* 2021 04 06 学习 */}
            <Numlist />
            <RForm />
            {/* 2021 04 05 状态提升 */}
            <Calculator />
            <WelcomeDialog />

            {/* 2021 04 12 回到顶部 */}
            {/* <ScrollToTop /> */}


        </div>
    )
}