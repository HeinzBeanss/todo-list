(()=>{"use strict";const t=(()=>{const t=document.querySelector(".sidebartop");return{projectFactory:(t,e)=>({name:t,selected:e}),addProject:()=>{console.log("why the fuck is this happening.");const e=document.createElement("input");e.classList.add("input"),e.setAttribute("placeholder","Unnamed Project"),t.appendChild(e)},Projects:[],testFocus:()=>{console.log("testFocus activated");const e=document.createElement("input");e.classList.add("input"),e.textContent="test, probs won't work.",t.appendChild(e),e.setAttribute("placeholder","initial test")}}})();console.log("success.");const e=t.projectFactory("test");console.log(e),document.querySelector("#createproject").addEventListener("click",t.testFocus)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQUEsTUFBTUEsRUFBZ0IsTUFFbEIsTUFFTUMsRUFBYUMsU0FBU0MsY0FBYyxlQTJDMUMsTUFBTyxDQUFFQyxlQXpDYyxDQUFDQyxFQUFNQyxLQUVuQixDQUFFRCxPQUFNQyxhQXVDTUMsV0FoQk4sS0FFZkMsUUFBUUMsSUFBSSxtQ0FFaEIsTUFBTUMsRUFBa0JSLFNBQVNTLGNBQWMsU0FDL0NELEVBQWdCRSxVQUFVQyxJQUFJLFNBQzlCSCxFQUFnQkksYUFBYSxjQUFlLG1CQUM1Q2IsRUFBV2MsWUFBWUwsRUFBZ0IsRUFTRk0sU0E3Q3BCLEdBNkM4QkMsVUFwQzdCLEtBQ2RULFFBQVFDLElBQUksdUJBQ1osTUFBTVMsRUFBY2hCLFNBQVNTLGNBQWMsU0FDM0NPLEVBQVlOLFVBQVVDLElBQUksU0FDMUJLLEVBQVlDLFlBQWMsMEJBQzFCbEIsRUFBV2MsWUFBWUcsR0FDdkJBLEVBQVlKLGFBQWEsY0FBZSxlQUFlLEVBZ0M5RCxFQWpEcUIsR0NHdEJOLFFBQVFDLElBQUksWUFFWixNQUFNVyxFQUFVcEIsRUFBY0ksZUFBZSxRQUM3Q0ksUUFBUUMsSUFBSVcsR0FJYWxCLFNBQVNDLGNBQWMsa0JBQy9Ca0IsaUJBQWlCLFFBQVNyQixFQUFjaUIsVSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlUHJvamVjdCA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBQcm9qZWN0cyA9IFtdO1xuXG4gICAgY29uc3Qgc2lkZWJhcnRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhcnRvcFwiKTtcblxuICAgIGNvbnN0IHByb2plY3RGYWN0b3J5ID0gKG5hbWUsIHNlbGVjdGVkKSA9PiB7XG5cbiAgICAgICAgcmV0dXJuIHsgbmFtZSwgc2VsZWN0ZWR9O1xuICAgIH1cblxuICAgIGNvbnN0IHRlc3RGb2N1cyA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0Rm9jdXMgYWN0aXZhdGVkXCIpO1xuICAgICAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImlucHV0XCIpO1xuICAgICAgICB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCA9IFwidGVzdCwgcHJvYnMgd29uJ3Qgd29yay5cIjtcbiAgICAgICAgc2lkZWJhcnRvcC5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCk7XG4gICAgICAgIHRleHRFbGVtZW50LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiaW5pdGlhbCB0ZXN0XCIpO1xuXG4gICAgICAgIC8vIGlmICh0ZXh0RWxlbWVudC5mb2N1cygpID0gdHJ1ZSkge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJlbGVtZW50IGlzIGZvY3VzZWRcIilcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBlbHNlIGlmICh0ZXh0RWxlbWVudC5mb2N1cygpID0gZmFsc2UpIHtcbiAgICAgICAgLy8gICAgIHRleHRFbGVtZW50LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwidXBkYXRlZCBwbGFjZWhvbGRlclwiKVxuICAgICAgICAvLyB9XG5cblxuICAgIH1cblxuXG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coXCJ3aHkgdGhlIGZ1Y2sgaXMgdGhpcyBoYXBwZW5pbmcuXCIpXG5cbiAgICBjb25zdCBuZXdQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmV3UHJvamVjdElucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dFwiKTtcbiAgICBuZXdQcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJVbm5hbWVkIFByb2plY3RcIik7XG4gICAgc2lkZWJhcnRvcC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0SW5wdXQpO1xuXG4gICAgLy8gUHJvamVjdHMucHVzaCgpXG5cbiAgICB9XG5cbiAgICAvLyBjb25zdCBnZW5lcmFsID0gcHJvamVjdEZhY3RvcnkoXCJnZW5lcmFsXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKGdlbmVyYWwubmFtZSk7XG5cbiAgICByZXR1cm4geyBwcm9qZWN0RmFjdG9yeSwgYWRkUHJvamVjdCwgUHJvamVjdHMsIHRlc3RGb2N1cyB9O1xuXG59KSgpO1xuXG5cblxuZXhwb3J0IHtjcmVhdGVQcm9qZWN0fTsiLCJpbXBvcnQge2NyZWF0ZVByb2plY3R9IGZyb20gXCIuLi9zcmMvbG9naWNcIlxuaW1wb3J0IHtkZXNpZ250ZXN0fSBmcm9tIFwiLi4vc3JjL2Rlc2lnblwiXG5cbmNvbnNvbGUubG9nKFwic3VjY2Vzcy5cIilcblxuY29uc3QgZ2VuZXJhbCA9IGNyZWF0ZVByb2plY3QucHJvamVjdEZhY3RvcnkoXCJ0ZXN0XCIpO1xuY29uc29sZS5sb2coZ2VuZXJhbCk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlcHJvamVjdFwiKTtcbmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVByb2plY3QudGVzdEZvY3VzKTtcblxuLy8gYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKFwidGVzdGluZzJcIilcbi8vIH0pOyJdLCJuYW1lcyI6WyJjcmVhdGVQcm9qZWN0Iiwic2lkZWJhcnRvcCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInByb2plY3RGYWN0b3J5IiwibmFtZSIsInNlbGVjdGVkIiwiYWRkUHJvamVjdCIsImNvbnNvbGUiLCJsb2ciLCJuZXdQcm9qZWN0SW5wdXQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJQcm9qZWN0cyIsInRlc3RGb2N1cyIsInRleHRFbGVtZW50IiwidGV4dENvbnRlbnQiLCJnZW5lcmFsIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=