AFRAME.registerComponent("cursor-listener",{
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
    this.handleClickEvents();
  },
  handleClickEvents: function () {
    this.el.addEventListener("click", evt => {
      const places_container = document.querySelector("#places-container")
      const { state } = places_container.getAttribute("tour")
      if(state == "places-list"){
        const id = this.el.getAttribute("id")
        const places_id = ["aintme","dc","marvel","thor"]
        if(places_id.includes(id)){
          places_container.setAttribute("tour",{
            state: "view",
            selectedCard: id
          })
        }
      }
    })
  },
  handlePlacesListState: function () {
    const id = this.el.getAttribute("id");
    const placesId = ["aintme","dc","marvel","thor"];
    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#places-container");
      placeContainer.setAttribute("cursor-listener", {
        selectedItemId: id,
      });
      this.el.setAttribute("material", {
        color: "#D76B30",
        opacity: 1,
      });
    }
  },
  handleMouseEnterEvents: function () {
    // Mouse Enter Events
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesListState();
    });
  },
  handleMouseLeaveEvents: function () {
    // Mouse Leave Events
    this.el.addEventListener("mouseleave",()=>{
      if(this.data.selectedItemId){
        const el = document.querySelector(`#${this.data.selectedItemId}`)
        const id = el.getAttribute("id")
        if(id == this.data.selectedItemId){
          el.setAttribute("material",{
            color: "#0077CC",
            opacity: 1,
          })
        }
      }
    })
  },
});
