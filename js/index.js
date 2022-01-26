window.onload = function () {
	let classLabel = document.getElementsByClassName("class-label")[0];
	let liArrLabel = classLabel.getElementsByTagName("li");

	let classContent = document.getElementsByClassName("class-content")[0];
	let liArrContent = classContent.getElementsByTagName("li");

	for (let i = 0; i < liArrLabel.length; i++)
	{
		liArrLabel[i].onclick = function () {
			// 排他思想，将上个标签时赋值的class清空
			for (let j = 0; j < liArrLabel.length; j++)
			{
				liArrLabel[j].className = "not-selected";
			}
			for (let f = 0; f < liArrContent.length; f++)
			{
				liArrContent[f].className = "";
			}

			// 赋予选中标签样式
			this.className = "selected";
			// 处理课程内容的显示
			if (this.textContent === "HTML")
			{
				for (let k = 0; k < liArrContent.length; k++)		
				{
					let flag = false;
					let classSpanArr = liArrContent[k].getElementsByTagName("span");		
					for (let h = 0; h < classSpanArr.length; h++)
					{
						if (classSpanArr[h].className == "class-html")	
						{
							flag = true;
						}
					}
					if (!flag)
					{
						liArrContent[k].className = "not-show";
					}
				}
			}
			else if (this.textContent === "全部")
			{
				for (let k = 0; k < liArrContent.length; k++)	
				{
					liArrContent[k].className = "";
				}
			}
			else if (this.textContent === "CSS")
			{
				for (let k = 0; k < liArrContent.length; k++)		
				{
					let flag = false;
					let classSpanArr = liArrContent[k].getElementsByTagName("span");		
					for (let h = 0; h < classSpanArr.length; h++)
					{
						if (classSpanArr[h].className == "class-css")	
						{
							flag = true;
						}
					}
					if (!flag)
					{
						liArrContent[k].className = "not-show";
					}
				}			
			}
			else if (this.textContent === "JavaScript")
			{
				for (let k = 0; k < liArrContent.length; k++)		
				{
					let flag = false;
					let classSpanArr = liArrContent[k].getElementsByTagName("span");		
					for (let h = 0; h < classSpanArr.length; h++)
					{
						if (classSpanArr[h].className == "class-javascript")	
						{
							flag = true;
						}
					}
					if (!flag)
					{
						liArrContent[k].className = "not-show";
					}
				}			
			}

		}
	}
}

