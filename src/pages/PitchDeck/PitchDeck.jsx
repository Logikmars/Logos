import './PitchDeck.scss';
const siteUrl = import.meta.env.VITE_SITE_URL;

export default () => {
    return (
        // <div style={{ height: '600px' }}>
        //     <Viewer fileUrl="/pd.pdf" />
        // </div>
        // <iframe src="/pd.pdf" className='PitchDeck' />
        // 1YOs40WCitIdF9xOI5-39IQVEaAs_tftO
        <iframe
            src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${siteUrl}#toolbar=0&scrollbar=0`}

            className='PitchDeck'
        ></iframe>
        // src="https://drive.google.com/file/d/1YOs40WCitIdF9xOI5-39IQVEaAs_tftO/view?usp=sharing"
    )
}