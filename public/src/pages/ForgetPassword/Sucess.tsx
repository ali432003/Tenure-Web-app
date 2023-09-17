import { Link } from "react-router-dom";
import Button from '../../components/Button/Button';

function Sucess() {
    return (
        <div className="bg-gray-50 grid grid-cols-1">

            <div className="container min-w-full center  relative flex flex-col justify-center items-center">
                <img className="w-80 mb-4 mt-12" src="src/assets/images/Frame 807-1.png" alt="" />
                <h2 className='mt-2 mb-2'>Reset Password</h2>
                <p style={{
                    color: 'grey'
                }}>Password has been changed</p>
            </div>
            <div className="container min-w-full center pt-9 relative flex flex-col justify-center items-center">
                <div className='w-1/2'>
                    
                    <div className="">
                        <Button type="submit" className="button-primary-lg  button mb-11" style={{ borderRadius: '10px'}}>
                          <Link to="/">Login</Link>  
                        </Button>
                    </div>
                </div>

                
            </div>

        </div>
    )
}

export default Sucess;
