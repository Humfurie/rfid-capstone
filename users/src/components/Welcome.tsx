import { Style } from "../lib/Style";

const Welcome = () => {
    return (
        <div>
            <div className={`${Style.tableBg}`}>
                <p className="text-2xl font-bold p-10">Welcome back!</p>
            </div>

        </div>
    );
}

export default Welcome;