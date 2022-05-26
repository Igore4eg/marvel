import { SpinnerCircular } from 'spinners-react';

const Spinner = () => {
    return (
        <div style={{margin: '0 auto', background: 'none', display: 'flex', justifyContent: 'center'}}>
            <SpinnerCircular size={60} thickness={155} speed={121} color="rgba(159, 0, 19, 1)" secondaryColor="rgba(172, 57, 57, 0.48)" />
        </div>
    )
}

export default Spinner;