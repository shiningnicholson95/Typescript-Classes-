class Video
{
  constructor(private Video_Name:string,public Category:string,private Total_Views:number,private Likes:number,private Dislikes:number,private Channel_Source:string,private Comments:Number,private SubtitlesAvailable:boolean,public Date_Published_Date:number,public Date_Published_Month:string,public Date_Published_Year:number)
  {
     this.Video_Name=Video_Name
     this.Category=Category
     this.Total_Views=Total_Views
     this.Likes=Likes
     this.Dislikes=Dislikes
     this.Channel_Source=Channel_Source
     this.Comments=Comments
     this.SubtitlesAvailable=SubtitlesAvailable
     this.Date_Published_Date=Date_Published_Date
     this.Date_Published_Month=Date_Published_Month
     this.Date_Published_Year=Date_Published_Year
  }
Get_Video_Name=()=>{
    return this.Video_Name
}
Get_Category=()=>{
    return this.Category
}
Get_Total_Views=()=>{
return this.Total_Views
}
Get_Likes=()=>{
return this.Likes
}
Get_Dislikes=()=>
{
    return this.Dislikes
}
Get_Channel_Source=()=>{
    return this.Channel_Source
}
Get_Comments=()=>
{
    return this.Comments
}
Get_SubtitlesAvailable=()=>{
    return this.SubtitlesAvailable
}
Get_Date_Published=()=>{
    return this.Date_Published_Date
    return this.Date_Published_Month
    return this.Date_Published_Year
}
}
let Video1= new Video("Between two Ferns","Comedy",2500,1200,700,"Comedy Central",200,false,22,"December",2017)
let Video2= new Video("American Horror Story:Witchcraft","Horror",3000,2000,500,"AHS Network",1200,true,12,"January",2012)
let Cat1:string=Video1.Category
let Cat2:string=Video2.Category
let Get_Related_Videos=(x:string,y:string)=>{
    if(x==y)
    {
        return true
    }
    else{
        return false
    }
    }
    
alert("Name: "+Video1.Get_Video_Name())
alert("Category: "+Video1.Get_Category())
alert("Total Views: "+Video1.Get_Total_Views())
alert("Total Likes: "+Video1.Get_Likes())
alert("Total Dislikes: "+Video1.Get_Dislikes())
alert("Video's Channel Source: "+Video1.Get_Channel_Source())
alert("Total Comments: "+Video1.Get_Comments())
alert("Subtitles Available?: "+Video1.Get_SubtitlesAvailable())
alert("Date Published: "+Video1.Date_Published_Date+'/'+Video1.Date_Published_Month+'/'+Video1.Date_Published_Year)
alert(Get_Related_Videos(Cat1,Cat2))
console.log(this.Video1)
console.log(this.Video2)