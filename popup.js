// const btn = document.querySelector(".displayProfileBtn");

// btn.addEventListener("click", () => {
//   chrome.storage.sync.get(
//     {
//       list: [
//         "https://www.linkedin.com/in/preeteshbanthia/",
//         "“https://www.linkedin.com/in/isanur-sardar-a14106185/",
//         "https://www.linkedin.com/in/pratik-thakker/",
//         "https://www.linkedin.com/in/shubhamsnkhatri/",
//       ], //put defaultvalues if any
//     },

//     function (data) {
//       console.log(data.list);
//       update(data.list); //storing the storage value in a variable and passing to update function
//     }
//   );

//   function update(array) {
//     array.push("testAdd");
//     //then call the set to update with modified value
//     chrome.storage.sync.set(
//       {
//         list: array,
//       },
//       function () {
//         console.log(array);
//       }
//     );
//   }

//   chrome.tabs.query(
//     //important
//     { active: true, windowId: chrome.windows.array },
//     function (tabs) {
//       alert(tabs[0].list);
//     }
//   );
// });

// // var testArray=["test", "teste", "testes"];

// // chrome.storage.sync.set({
// //     list:testArray
// // }, function() {
// //     console.log("added to list");
// // });

const btn = document.querySelector(".displayProfileBtn");
var testProfiles = [
  "https://www.linkedin.com/in/preeteshbanthia/",
  "https://www.linkedin.com/in/isanur-sardar-a14106185/",
  "https://www.linkedin.com/in/pratik-thakker/",
  "https://www.linkedin.com/in/shubhamsnkhatri/",
];
btn.addEventListener("click", () => {
  chrome.storage.sync.set(
    {
      list: testProfiles,
    },
    function () {
      console.log(testProfiles);
    }
  );

  chrome.storage.sync.get("list", function ({ list }) {
    console.warn("Value currently is " + list);
  });

  chrome.tabs.query(
    { active: true, windowId: chrome.windows.testProfiles },
    function () {
      alert(
        `${testProfiles[0]}, 
        ${testProfiles[1]} , 
        ${testProfiles[2]}, 
        ${testProfiles[3]}`
      );
    }
  );
});
