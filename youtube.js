var Video = /** @class */ (function () {
    function Video(Video_Name, Category, Total_Views, Likes, Dislikes, Channel_Source, Comments, SubtitlesAvailable, Date_Published_Date, Date_Published_Month, Date_Published_Year) {
        var _this = this;
        this.Video_Name = Video_Name;
        this.Category = Category;
        this.Total_Views = Total_Views;
        this.Likes = Likes;
        this.Dislikes = Dislikes;
        this.Channel_Source = Channel_Source;
        this.Comments = Comments;
        this.SubtitlesAvailable = SubtitlesAvailable;
        this.Date_Published_Date = Date_Published_Date;
        this.Date_Published_Month = Date_Published_Month;
        this.Date_Published_Year = Date_Published_Year;
        this.Get_Video_Name = function () {
            return _this.Video_Name;
        };
        this.Get_Category = function () {
            return _this.Category;
        };
        this.Get_Total_Views = function () {
            return _this.Total_Views;
        };
        this.Get_Likes = function () {
            return _this.Likes;
        };
        this.Get_Dislikes = function () {
            return _this.Dislikes;
        };
        this.Get_Channel_Source = function () {
            return _this.Channel_Source;
        };
        this.Get_Comments = function () {
            return _this.Comments;
        };
        this.Get_SubtitlesAvailable = function () {
            return _this.SubtitlesAvailable;
        };
        this.Get_Date_Published = function () {
            return _this.Date_Published_Date;
            return _this.Date_Published_Month;
            return _this.Date_Published_Year;
        };
        this.Video_Name = Video_Name;
        this.Category = Category;
        this.Total_Views = Total_Views;
        this.Likes = Likes;
        this.Dislikes = Dislikes;
        this.Channel_Source = Channel_Source;
        this.Comments = Comments;
        this.SubtitlesAvailable = SubtitlesAvailable;
        this.Date_Published_Date = Date_Published_Date;
        this.Date_Published_Month = Date_Published_Month;
        this.Date_Published_Year = Date_Published_Year;
    }
    return Video;
}());
var Video1 = new Video("Between two Ferns", "Comedy", 2500, 1200, 700, "Comedy Central", 200, false, 22, "December", 2017);
var Video2 = new Video("American Horror Story:Witchcraft", "Horror", 3000, 2000, 500, "AHS Network", 1200, true, 12, "January", 2012);
var Cat1 = Video1.Category;
var Cat2 = Video2.Category;
var Get_Related_Videos = function (x, y) {
    if (x == y) {
        return true;
    }
    else {
        return false;
    }
};
alert("Name: " + Video1.Get_Video_Name());
alert("Category: " + Video1.Get_Category());
alert("Total Views: " + Video1.Get_Total_Views());
alert("Total Likes: " + Video1.Get_Likes());
alert("Total Dislikes: " + Video1.Get_Dislikes());
alert("Video's Channel Source: " + Video1.Get_Channel_Source());
alert("Total Comments: " + Video1.Get_Comments());
alert("Subtitles Available?: " + Video1.Get_SubtitlesAvailable());
alert("Date Published: " + Video1.Date_Published_Date + '/' + Video1.Date_Published_Month + '/' + Video1.Date_Published_Year);
alert(Get_Related_Videos(Cat1, Cat2));
console.log(this.Video1);
console.log(this.Video2);
