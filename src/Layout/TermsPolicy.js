import React from 'react'

function TermsPolicy() {
    window.scrollTo(0, 0);

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [])

    return (
        <div>
            {/* <div className='text-center p-5 privacy_heading'><h1>CANCELLATION AND OTHER POLICY</h1></div> */}
            <div className='breadcrum'>
                <h1 className='breadcrum_title'>CANCELLATION AND OTHER POLICY</h1>

            </div>
            <div className="privacy_content_para">

                <div className="privacy_content">
                    {/* <div> <div><h2>PRIVACY POLICY</h2></div></div> */}
                    <h2 className='headings'>PRIVACY POLICY</h2>

                    <div className='para'>
                        <div>
                            <p>Our privacy policy mentions the collection, usage, and disclosure of your personal data when you use Ikore services.</p>
                        </div>
                        <div>
                            <p>
                                We ensure that your personal data is secure with us and is only used to improve our Services. We will not be disclosing this data to any third party.  By using our Service, you agree to the use of information in accordance with this policy.
                            </p>
                        </div>

                        <div>
                            <p>
                                We use “cookies” and we obtain certain information when you access   <a href='https://www.ikorepilates.in/'> https://www.ikorepilates.in/</a>
                            </p>
                        </div>
                        <div>
                            <p>
                                Note: Your browsing and purchasing patterns may be commercially sensitive. We    recognize this. A number of companies offer utilities designed to help you visit    Web sites anonymously. Although we will not be able to provide you with a    personalized experience at Ikorepilates.in if we cannot recognize you, we want    you to be aware that these tools exist.
                            </p>
                        </div>

                        <div>
                            <p>
                                E-mail Communications: To help us make e-mails more useful and interesting, we often receive a confirmation when you open e-mail from Ikorepilates.in  if your computer supports such capabilities. We also compare our customer list to lists received from other companies, in an effort to avoid sending unnecessary messages to our customers. If you do not want to receive e-mail or other mail from us, please adjust your Customer Communication Preferences.
                            </p>
                        </div>

                        <div>
                            <p>
                                Information from Other Sources: We might receive information about you or your organization from other sources and add it to our account information.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginLeft: "25px" }}>
                        <h4>What about Cookies?</h4>
                        <p>
                            Cookies are alphanumeric identifiers that we transfer to your computer’s hard drive through your Web browser to enable our systems to recognize your browser and to provide additional features such personalized information, and storage of items in your Shopping Cart between visits. The Help portion of the toolbar on most browsers will tell you how to prevent your browser from accepting new cookies, how to have the browser notify you when you receive a new cookie, or how to disable cookies altogether. However, cookies allow you to take full advantage of many coolest features of Ikorepilates.in, and we recommend that you leave them turned on.
                        </p>
                    </div>

                    <div style={{ marginLeft: "25px" }}>
                        <h4>How secure is information about me?</h4>
                        <p>
                            We protect the security of your information during transmission by using Secure Sockets Layer (SSL) software, which encrypts information you input. It is important for you to protect against unauthorized access to your password and to your computer. Be sure to sign off when finished using a shared computer.
                        </p>
                    </div>


                    <div className='mt-5' >
                        <div><h2>CANCELLATION</h2></div>

                        <p>
                            We do not encourage cancellationlation of seats once booked. Client needs to inform about the cancellation minimum 24 hours prior to the session start time, else the rescheduling will not be appplicable. Ikore reserves the right to cancel a purchase and refund the money at their own discretion
                        </p>
                    </div>

                    <div className='mt-5'>
                        <div><h2>SCHEDULING AND RESERVATIONS</h2></div>
                        <p>
                            We accept seat reservations booking through online, telephone or in person. On the spot revervations are subject to seat availability.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TermsPolicy
