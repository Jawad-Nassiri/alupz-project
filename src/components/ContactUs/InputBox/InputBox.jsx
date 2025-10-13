import './InputBox.css';

export default function InputBox({ placeholder }) {
    return (
        <div className="input-box">
            <input type="text" className="input-box__element" placeholder={placeholder} />
        </div>
    )
}