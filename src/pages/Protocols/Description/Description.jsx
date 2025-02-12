import './Description.scss';
export default ({ img, title, description, onClick }) => {return (
    <div className='Description' onClick={() => {
        console.log(`Clicked on: ${title}`);
        onClick();
    }}>
        <div className='Description__light'>
            <img src={img} alt="" />
            <div className='Description__container'>
                <h3 className='Description__title'>{title}</h3>
                <p className='Description__description'>{description}</p>
            </div>
        </div>
    </div>
)}