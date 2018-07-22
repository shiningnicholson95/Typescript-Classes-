class Social_Profile
{
    constructor(private User_Name:string,private User_Email:string,private User_Age:number,public User_Birthday_Date:number,public User_Birthday_Month:string,public User_Birthday_Year:number,private User_Friends:number,private User_Gender:string,private User_Hometown:string,private User_PageLikes:number,private User_Location:string,private User_Photos:number,private User_Posts:number,private User_Status:string,private User_Videos:number)
    {
        this.User_Name=User_Name
        this.User_Email=User_Email
        this.User_Age=User_Age
        this.User_Birthday_Date=User_Birthday_Date
        this.User_Birthday_Month=User_Birthday_Month
        this.User_Birthday_Year=User_Birthday_Year
        this.User_Friends-User_Friends
        this.User_Gender=User_Gender
        this.User_Hometown=User_Hometown
        this.User_Location=User_Location
        this.User_Photos=User_Photos
        this.User_Posts=User_Posts
        this.User_Status=User_Status
        this.User_Videos=User_Videos
    }
    Get_User_Name=()=>
        {
           return this.User_Name
        }
    Get_User_Email=()=>
        {
            return this.User_Email
        }
        Get_User_Age=()=>
        {
           return this.User_Age
        }
        Get_User_Friends=()=>
        {
            return this.User_Friends
        }
        Get_User_Gender=()=>
        {
           return this.User_Gender
        }
        Get_User_Hometown=()=>
        {
           return this.User_Hometown
        }
        Get_User_Location=()=>
        {
            return this.User_Location
        }
        Get_User_Photos=()=>
        {
           return this.User_Photos
        }
        Get_User_Posts=()=>
        {
           return this.User_Posts
        }
        Get_User_Status=()=>
        {
           return this.User_Status
        }
        Get_User_Videos=()=>
        {
         return this.User_Videos
        }
}
let Profile= new Social_Profile("Daffy Duck","Daffy@looney.com",21,24,"December",1994,2002,"M","LonneyVille",200,"Walt Disney Studios",2500,450,"Single",200)
alert("Name:"+Profile.Get_User_Name())
alert("Email:"+Profile.Get_User_Email())
alert("Age:"+Profile.Get_User_Age())
alert("Birthday:"+Profile.User_Birthday_Date+'/'+Profile.User_Birthday_Month+'/'+Profile.User_Birthday_Year)
alert("Friends:"+Profile.Get_User_Friends())
alert("Gender:"+Profile.Get_User_Gender())
alert("Hometown:"+Profile.Get_User_Hometown())
alert("Location:"+Profile.Get_User_Location())
alert("Status:"+Profile.Get_User_Status())
alert("Photos:"+Profile.Get_User_Photos())
alert("Posts:"+Profile.Get_User_Posts())
alert("Videos:"+Profile.Get_User_Videos())
console.log(this.Profile)