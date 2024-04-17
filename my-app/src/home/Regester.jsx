import React from 'react'
const subTitle = "Save Your Time";
const title = (
    <h2 className='title'>
        Join on Day Long Free WorkShop <b>Advance <span>Mastering</span> on Sales </b>
    </h2>
)
const desc = "Limited Time Offer! Hurry Up";
const Regester = () => {
    return (
        <section className='register-section   padding-tb pb-0'>
            <div className="container">
                <div className="row g-4 row-cols-lg-2 row-cols-1 align-items-center">
                    <div className="col">
                        <div className="section-header">
                            <span className='subtitle'>{subTitle}</span>
                            {title}
                            <p>{desc}</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="section-wrapper">
                            <h4>Register Now</h4>
                            <form className='register-form' >
                                <input type="text" name='name' placeholder='UserName' className='reg-input' />
                                <input type="email" name='email' placeholder='Email.com' className='reg-input' />
                                <input type="number" name='number' placeholder='Phone Number' className='reg-input' />
                                <button type='submit' className='lab-btn'> Register Now  </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Regester
