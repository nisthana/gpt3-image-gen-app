import { ClockLoader } from "react-spinners";
import { BeatLoader } from "react-spinners";
import ClipLoader from "react-spinners/ClipLoader";
export default function Spinner({showSpinner}){
    if (showSpinner) {
        return (
            <BeatLoader color="#36d7b7" />
        )
    }
}