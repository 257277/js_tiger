import styles from "../styles/addVendor.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/router';
export default function Page() {
    const router = useRouter();
    const [data, setdata] = useState([]);
    const [id, setid] = useState("");
    useEffect(() => {

        axios.get(`https://creepy-crow-battledress.cyclic.app/vendor/allvendor`).then((res) => {
            // console.log(res.data.data);
            setdata(res.data.data);

        })
        setid(localStorage.getItem("id"));
    }, [])
    return (
        <div>
            <h1 onClick={() => {
                router.push('/allVendor');
            }} className={styles.pth}>All Vendors</h1>
            <h1 className={styles.heading}>Edit Vendor Details</h1>
            <form className={styles.form} >
                <input type="text" placeholder="Vendor Name" className={styles.input} id="vname" ></input><br></br>
                <input type="Number" placeholder="Back Account Number" className={styles.input} id="bno" ></input><br></br>
                <input type="text" placeholder="Bank Name" className={styles.input} id="bname" ></input><br></br>
                <input type="text" placeholder="Address Line 1" className={styles.input} id="add1" ></input><br></br>
                <input type="text" placeholder="Address Line 2" className={styles.input} id="add2" ></input><br></br>
                <input type="text" placeholder="City" className={styles.input} id="city" ></input><br></br>
                <input type="text" placeholder="Country" className={styles.input} id="country" ></input><br></br>
                <input type="Number" placeholder="Zip Code" className={styles.input} id="zcode" ></input><br></br>
                <button type="submit" className={styles.btn} onClick={(e) => {
                    e.preventDefault();
                    let vendor_name = document.querySelector("#vname").value;
                    let bank_account_no = document.querySelector("#bno").value;
                    let bank_name = document.querySelector("#bname").value;
                    let address_line1 = document.querySelector("#add1").value;
                    let address_line2 = document.querySelector("#add2").value;
                    let city = document.querySelector("#city").value;
                    let country = document.querySelector("#country").value;
                    let zip_code = document.querySelector("#zcode").value;
                    let obj = { vendor_name, bank_account_no, bank_name, address_line1, address_line2, city, country, zip_code };
                    // console.log(setdt);
                    axios.patch(`https://creepy-crow-battledress.cyclic.app/vendor/editvendor/${id}`, obj)
                        .then(async function (response) {
                            alert(response.data);
                        })
                        .catch(function (error) {
                            console.log(error);
                            alert(error);
                        });

                }}> Submit</button>
            </form>
        </div>
    )

}