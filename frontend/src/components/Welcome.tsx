import { Style } from "../lib/Style";

const Welcome = (props: any) => {
    const { user } = props
    return (
        <div>
            <div className={`${Style.tableBg}`}>
                <p className="text-2xl font-bold p-10">Welcome back,   {user?.data.first_name} !</p>
            </div>

        </div>
    );
}

export default Welcome;