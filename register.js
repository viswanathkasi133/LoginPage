function validation(){
    var phone= /^[6-9]{1}[0-9]{9}$/
    var ph=document.getElementById("phone").value

    if(ph==""){
        document.getElementById("msg1").innerHTML="Enter the mobile number."
        return false
    }
    if(ph.match(phone))
    true;
    else
    {
        document.getElementById("msg1").innerHTML="Enter the invalid Number."
        return false
    }
    


}

function generateOTP() {
    // Define the length of the OTP
    const otpLength = 6;
  
    // Generate a random OTP using Math.random() and slice it to the desired length
    const otp = Math.random().toString().substr(2, otpLength);
  
    return otp;
  }
  
  // Example usage:
  const generatedOTP = generateOTP();
  console.log("Generated OTP:", generatedOTP);