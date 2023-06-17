import styles from "../styles/addVendor.module.css";
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useRouter } from 'next/router';
export default function Page() {

    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        let vendor_name = data.vname;
        let bank_account_no = data.bno;
        let bank_name = data.bname;
        let address_line1 = data.add1;
        let address_line2 = data.add2;
        let city = data.city;
        let country = data.country;
        let zip_code = data.zcode;
        let obj = { vendor_name, bank_account_no, bank_name, address_line1, address_line2, city, country, zip_code };

        axios.post('https://creepy-crow-battledress.cyclic.app/vendor/postvendor', obj)
            .then(async function (response) {
                alert(response.data);
            })
            .catch(function (error) {
                console.log(error);
                alert(error);
            });
    }
    return (
        <div>
            <h1 onClick={() => {
                router.push('/allVendor');
            }} className={styles.pth}>All Vendors</h1>
            <h1 className={styles.heading}>ADD Vendor</h1>

            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="vendor_name" placeholder="Vendor Name" className={styles.input} id="vname" {...register('vname', { required: true })}></input><br></br>
                <input type="Number" name="bank_account_no" placeholder="Back Account Number" className={styles.input} id="bno" {...register('bno', { required: true })}></input><br></br>
                <input type="text" name="bank_name" placeholder="Bank Name" className={styles.input} id="bname" {...register('bname', { required: true })}></input><br></br>
                <input type="text" name="address_line1" placeholder="Address Line 1" className={styles.input} id="add1" {...register('add1', { required: true })}></input><br></br>
                <input type="text" name="address_line2" placeholder="Address Line 2" className={styles.input} id="add2" {...register('add2', { required: false })}></input><br></br>
                <input type="text" name="city" placeholder="City" className={styles.input} id="city"{...register('city', { required: true })} ></input><br></br>
                <input type="text" name="country" placeholder="Country" className={styles.input} id="country" {...register('country', { required: true })}></input><br></br>
                <input type="Number" name="zip_code" placeholder="Zip Code" className={styles.input} id="zcode" {...register('zcode', { required: true })}></input><br></br>
                <button type="submit" className={styles.btn}> Submit</button>
            </form>

        </div >

    )
}