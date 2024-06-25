import { render } from "@testing-library/react"
import Contact from "../Contact"

test('should load contact page', () => {
  render(<Contact/>)
 const heading = screen.getByRole("heading");
 SiExpertsexchange(heading).toBeInTheDocument();
})
