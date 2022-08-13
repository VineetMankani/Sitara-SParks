import React from 'react';

import Navbar from '../../components/navbar/Navbar';
import './aotd.css'
const AOTD = () => {
    return (
        <>
            <Navbar />
            
            <section id="aotd" className="">
                <div className="image-cont mt-5 bg-info">
                    {/* <img src="https://picsum.photos/200" className="image" alt="" /> */}
                </div>
                <div className="container">
                    <div className="pt-4">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo aliquid doloribus iste tempora quidem nemo atque adipisci dolorum similique. Temporibus sequi voluptatem ut nihil recusandae vero optio saepe cupiditate eveniet! Mollitia, ratione rerum. Sint labore similique earum ut id quae cum autem quibusdam suscipit, at illum maiores adipisci incidunt veritatis optio provident quod inventore. Harum deserunt cum exercitationem excepturi, fugit atque earum aspernatur ex.</p>
                    </div>
                    <div className="row mt-4">
                        <div className="col-5">
                            <img src="https://picsum.photos/300/200" className="" alt="" />
                        </div>
                        <div className="col-7">
                            <p>
                               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ullam quis ipsa, facilis vero nisi optio eaque, aut ratione repudiandae sapiente, dolorem inventore. Sunt voluptates esse repellendus nobis dolorem id, quis consequuntur repudiandae ut deleniti quidem optio mollitia maxime molestiae, veritatis laboriosam autem omnis explicabo reiciendis assumenda rem fuga, cupiditate sed. Neque, in illum inventore assumenda vitae velit laborum eveniet quidem ipsum ducimus quas molestiae atque sunt totam cupiditate ea! Quas sapiente iste iure numquam dolorum porro fuga, repudiandae excepturi aperiam soluta possimus pariatur sed ullam impedit, ut nesciunt rerum officiis perferendis ipsam laboriosam reprehenderit nobis architecto, libero aliquam. Ipsam! 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>        
    )
}

export default AOTD;