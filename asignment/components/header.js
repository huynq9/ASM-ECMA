import menus from "./nav";
const header =
  () => `<div class="fixed  w-full h-[40px] text-[22px]  pt-1 pr-24   bg-neutral-700 text-white text-right">
    ${menus()}  
</div>`;

export default header;
