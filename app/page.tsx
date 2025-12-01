import { DisplayMv } from "features/routes/top/components/displayMv";
import { DisplayAbout } from "features/routes/top/components/displayAbout";
import { DisplayBlog } from "features/routes/top/components/displayBlog";
import { DisplayWork } from 'features/routes/top/components/displayWork';
import { DisplaySkill } from "features/routes/top/components/displaySkill";

export default function Page() {

  return (
    <>
      <DisplayMv />
      <DisplayAbout />
      <DisplayBlog />
      <DisplayWork />
      <DisplaySkill />
    </>
  )
}
