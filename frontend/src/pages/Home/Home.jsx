import React, { useContext } from "react";
import Counter from "../../components/Counter/counter";
import GlobalContext from "../../context/globalContext";
import style from '../Home/home.module.css';
import Header from "../../components/Header/header";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { EffectCards } from 'swiper/modules';
import 'swiper/css/effect-cards';

const Home = () => {
    const { userData, userDataTG } = useContext(GlobalContext);
// console.log('✌️userData Home--->', userData);



    return (
        <div className={style.box}>
            <div className={style.contentBox}>
                <Header>
                    {userData?.name && (
                        <h1>Привет,<br></br> {userData.name}👋 </h1>
                    )}
                </Header>

                {userData?.Events?.length > 0 ? (
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className={style.swiper}
                    >
                        {userData.Events.map((event, index) => (
                            <SwiperSlide
                                key={index}
                                className={style.swiperSlide}
                            >
                                <Counter count={event.date} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <p>Нет предстоящих событий.</p>
                )}

                
            </div>
        </div>
    );
};

export default Home;
