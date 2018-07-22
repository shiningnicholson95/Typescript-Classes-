var Social_Profile = /** @class */ (function () {
    function Social_Profile(User_Name, User_Email, User_Age, User_Birthday_Date, User_Birthday_Month, User_Birthday_Year, User_Friends, User_Gender, User_Hometown, User_PageLikes, User_Location, User_Photos, User_Posts, User_Status, User_Videos) {
        var _this = this;
        this.User_Name = User_Name;
        this.User_Email = User_Email;
        this.User_Age = User_Age;
        this.User_Birthday_Date = User_Birthday_Date;
        this.User_Birthday_Month = User_Birthday_Month;
        this.User_Birthday_Year = User_Birthday_Year;
        this.User_Friends = User_Friends;
        this.User_Gender = User_Gender;
        this.User_Hometown = User_Hometown;
        this.User_PageLikes = User_PageLikes;
        this.User_Location = User_Location;
        this.User_Photos = User_Photos;
        this.User_Posts = User_Posts;
        this.User_Status = User_Status;
        this.User_Videos = User_Videos;
        this.Get_User_Name = function () {
            return _this.User_Name;
        };
        this.Get_User_Email = function () {
            return _this.User_Email;
        };
        this.Get_User_Age = function () {
            return _this.User_Age;
        };
        this.Get_User_Friends = function () {
            return _this.User_Friends;
        };
        this.Get_User_Gender = function () {
            return _this.User_Gender;
        };
        this.Get_User_Hometown = function () {
            return _this.User_Hometown;
        };
        this.Get_User_Location = function () {
            return _this.User_Location;
        };
        this.Get_User_Photos = function () {
            return _this.User_Photos;
        };
        this.Get_User_Posts = function () {
            return _this.User_Posts;
        };
        this.Get_User_Status = function () {
            return _this.User_Status;
        };
        this.Get_User_Videos = function () {
            return _this.User_Videos;
        };
        this.User_Name = User_Name;
        this.User_Email = User_Email;
        this.User_Age = User_Age;
        this.User_Birthday_Date = User_Birthday_Date;
        this.User_Birthday_Month = User_Birthday_Month;
        this.User_Birthday_Year = User_Birthday_Year;
        this.User_Friends - User_Friends;
        this.User_Gender = User_Gender;
        this.User_Hometown = User_Hometown;
        this.User_Location = User_Location;
        this.User_Photos = User_Photos;
        this.User_Posts = User_Posts;
        this.User_Status = User_Status;
        this.User_Videos = User_Videos;
    }
    return Social_Profile;
}());
var Profile = new Social_Profile("Daffy Duck", "Daffy@looney.com", 21, 24, "December", 1994, 2002, "M", "LonneyVille", 200, "Walt Disney Studios", 2500, 450, "Single", 200);
alert("Name:" + Profile.Get_User_Name());
alert("Email:" + Profile.Get_User_Email());
alert("Age:" + Profile.Get_User_Age());
alert("Birthday:" + Profile.User_Birthday_Date + '/' + Profile.User_Birthday_Month + '/' + Profile.User_Birthday_Year);
alert("Friends:" + Profile.Get_User_Friends());
alert("Gender:" + Profile.Get_User_Gender());
alert("Hometown:" + Profile.Get_User_Hometown());
alert("Location:" + Profile.Get_User_Location());
alert("Status:" + Profile.Get_User_Status());
alert("Photos:" + Profile.Get_User_Photos());
alert("Posts:" + Profile.Get_User_Posts());
alert("Videos:" + Profile.Get_User_Videos());
console.log(this.Profile);
