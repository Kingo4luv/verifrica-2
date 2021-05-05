import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, 
    LinkedinShareButton, LinkedinIcon,  WhatsappShareButton, WhatsappIcon, } from 'next-share'

const Share = () => {
    return(
        <div className="fixed top-1/4 right-5 lg:right-32 py-2 flex flex-col items-center space-y-4 z-[1]">
            <FacebookShareButton
            url={'https://github.com/next-share'}
            quote={'next-share is a social share buttons for your next React apps.'}
            hashtag={'#nextshare'}
            >
            <FacebookIcon size={40} round />
            </FacebookShareButton>
            <TwitterShareButton
            url={'https://github.com/next-share'}
            title={'next-share is a social share buttons for your next React apps.'}
            >
            <TwitterIcon size={40} round />
            </TwitterShareButton>
            <LinkedinShareButton url={'https://github.com/next-share'}>
             <LinkedinIcon size={40} round />
            </LinkedinShareButton>
            <WhatsappShareButton
                url={'https://github.com/next-share'}
                title={'next-share is a social share buttons for your next React apps.'}
                separator=":: "
                >
                <WhatsappIcon size={40} round />
            </WhatsappShareButton>
        </div>
    )
}

export default Share;