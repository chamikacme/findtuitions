import { MultiSelect } from "@mantine/core";
import "../index.css";

function SubjectList({ opened, setOpened }) {
  const subjectData = [
    {
      value: "Combine Mathematics",
      label: "Combine Mathematics",
      group: "Adv. Level - Science Stream",
    },
    {
      value: "Biology",
      label: "Biology",
      group: "Adv. Level - Science Stream",
    },
    {
      value: "Chemistry",
      label: "Chemistry",
      group: "Adv. Level - Science Stream",
    },
    {
      value: "Physics",
      label: "Physics",
      group: "Adv. Level - Science Stream",
    },
    {
      value: "Higher Mathematics",
      label: "Higher Mathematics",
      group: "Adv. Level - Science Stream",
    },
    {
      value: "Agriculture",
      label: "Agriculture",
      group: "Adv. Level - Science Stream",
    },
    {
      value: "Agro Technology",
      label: "Agro Technology",
      group: "Adv. Level - Technology Stream",
    },
    {
      value: "Engineering Technology",
      label: "Engineering Technology",
      group: "Adv. Level - Technology Stream",
    },
    {
      value: "Information & Communication Technology",
      label: "Information & Communication Technology",
      group: "Adv. Level - Technology Stream",
    },
    {
      value: "Bio System Technology",
      label: "Bio System Technology",
      group: "Adv. Level - Technology Stream",
    },
    {
      value: "Science for Technology",
      label: "Science for Technology",
      group: "Adv. Level - Technology Stream",
    },
    {
      value: "Accounting",
      label: "Accounting",
      group: "Adv. Level - Commerce Stream",
    },
    {
      value: "Business Statistics",
      label: "Business Statistics",
      group: "Adv. Level - Commerce Stream",
    },
    {
      value: "Business Studies",
      label: "Business Studies",
      group: "Adv. Level - Commerce Stream",
    },
    {
      value: "Economics",
      label: "Economics",
      group: "Adv. Level - Commerce Stream",
    },
    { value: "Arabic", label: "Arabic", group: "Adv. Level - Arts Stream" },
    { value: "Art", label: "Art", group: "Adv. Level - Arts Stream" },
    {
      value: "Bharatha Natayam",
      label: "Bharatha Natayam",
      group: "Adv. Level - Arts Stream",
    },
    { value: "Buddhism", label: "Buddhism", group: "Adv. Level - Arts Stream" },
    {
      value: "Buddhist Civilization",
      label: "Buddhist Civilization",
      group: "Adv. Level - Arts Stream",
    },
    { value: "Chinese", label: "Chinese", group: "Adv. Level - Arts Stream" },
    {
      value: "Christian Civilization",
      label: "Christian Civilization",
      group: "Adv. Level - Arts Stream",
    },
    {
      value: "Christianity",
      label: "Christianity",
      group: "Adv. Level - Arts Stream",
    },
    {
      value: "Communication and Media Studies",
      label: "Communication and Media Studies",
      group: "Adv. Level - Arts Stream",
    },
    { value: "Dance", label: "Dance", group: "Adv. Level - Arts Stream" },
    { value: "English", label: "English", group: "Adv. Level - Arts Stream" },
    { value: "French", label: "French", group: "Adv. Level - Arts Stream" },
    {
      value: "Geography",
      label: "Geography",
      group: "Adv. Level - Arts Stream",
    },
    { value: "German", label: "German", group: "Adv. Level - Arts Stream" },
    {
      value: "Greek and Roman Civilization",
      label: "Greek and Roman Civilization",
      group: "Adv. Level - Arts Stream",
    },
    {
      value: "Hindi Language",
      label: "Hindi Language",
      group: "Adv. Level - Arts Stream",
    },
    {
      value: "Hindu Civilization",
      label: "Hindu Civilization",
      group: "Adv. Level - Arts Stream",
    },
    { value: "Hinduism", label: "Hinduism", group: "Adv. Level - Arts Stream" },
    { value: "History", label: "History", group: "Adv. Level - Arts Stream" },
    {
      value: "Home Economics",
      label: "Home Economics",
      group: "Adv. Level - Arts Stream",
    },
    { value: "Islam", label: "Islam", group: "Adv. Level - Arts Stream" },
    {
      value: "Islamic Civilization",
      label: "Islamic Civilization",
      group: "Adv. Level - Arts Stream",
    },
    {
      value: "Japan Language",
      label: "Japan Language",
      group: "Adv. Level - Arts Stream",
    },
    {
      value: "Logic and Scientific Method",
      label: "Logic and Scientific Method",
      group: "Adv. Level - Arts Stream",
    },
    {
      value: "Oriental Music",
      label: "Oriental Music",
      group: "Adv. Level - Arts Stream",
    },
    {
      value: "Pali Language",
      label: "Pali Language",
      group: "Adv. Level - Arts Stream",
    },
    {
      value: "Political Science",
      label: "Political Science",
      group: "Adv. Level - Arts Stream",
    },
    { value: "Russian", label: "Russian", group: "Adv. Level - Arts Stream" },
    { value: "Sanskrit", label: "Sanskrit", group: "Adv. Level - Arts Stream" },
    { value: "Sinhala", label: "Sinhala", group: "Adv. Level - Arts Stream" },
    { value: "Tamil", label: "Tamil", group: "Adv. Level - Arts Stream" },
    {
      value: "Western Music",
      label: "Western Music",
      group: "Adv. Level - Arts Stream",
    },
    { value: "Ord. Level - Buddhism", label: "Buddhism", group: "Ord. Level" },
    { value: "Ord. Level - Hinduism", label: "Hinduism", group: "Ord. Level" },
    {
      value: "Ord. Level - Catholicism",
      label: "Catholicism",
      group: "Ord. Level",
    },
    {
      value: "Ord. Level - Christianity",
      label: "Christianity",
      group: "Ord. Level",
    },
    { value: "Ord. Level - Islam", label: "Islam", group: "Ord. Level" },
    {
      value: "Ord. Level - Sinhala Language and Literature",
      label: "Sinhala Language and Literature",
      group: "Ord. Level",
    },
    {
      value: "Ord. Level - Tamil Language and Literature",
      label: "Tamil Language and Literature",
      group: "Ord. Level",
    },
    { value: "Ord. Level - English", label: "English", group: "Ord. Level" },
    { value: "Ord. Level - History", label: "History", group: "Ord. Level" },
    { value: "Ord. Level - Science", label: "Science", group: "Ord. Level" },
    {
      value: "Ord. Level - Mathematics",
      label: "Mathematics",
      group: "Ord. Level",
    },
    {
      value: "Ord. Level - Business & Accounting Studies",
      label: "Business & Accounting Studies",
      group: "Ord. Level",
    },
    {
      value: "Ord. Level - Geography",
      label: "Geography",
      group: "Ord. Level",
    },
    {
      value: "Ord. Level - Civic Education",
      label: "Civic Education",
      group: "Ord. Level",
    },
    {
      value: "Ord. Level - Entrepreneurship Studies",
      label: "Entrepreneurship Studies",
      group: "Ord. Level",
    },
    {
      value: "Ord. Level - Second Language (Sinhala)",
      label: "Second Language (Sinhala)",
      group: "Ord. Level",
    },
    {
      value: "Ord. Level - Second Language (Tamil)",
      label: "Second Language (Tamil)",
      group: "Ord. Level",
    },
    { value: "Ord. Level - Pali", label: "Pali", group: "Ord. Level" },
    { value: "Ord. Level - Sanskrit", label: "Sanskrit", group: "Ord. Level" },
    { value: "Ord. Level - French", label: "French", group: "Ord. Level" },
    { value: "Ord. Level - German", label: "German", group: "Ord. Level" },
    { value: "Ord. Level - Hindi", label: "Hindi", group: "Ord. Level" },
    { value: "Ord. Level - Japanese", label: "Japanese", group: "Ord. Level" },
    { value: "Ord. Level - Arabic", label: "Arabic", group: "Ord. Level" },
    { value: "Ord. Level - Korean", label: "Korean", group: "Ord. Level" },
    { value: "Ord. Level - Chinese", label: "Chinese", group: "Ord. Level" },
    { value: "Ord. Level - Russian", label: "Russian", group: "Ord. Level" },
    {
      value: "Ord. Level - Oriental Music",
      label: "Oriental Music",
      group: "Ord. Level",
    },
    {
      value: "Ord. Level - Western Music",
      label: "Western Music",
      group: "Ord. Level",
    },
    {
      value: "Ord. Level - Carnatic Music",
      label: "Carnatic Music",
      group: "Ord. Level",
    },
    {
      value: "Ord. Level - Oriental Dancing",
      label: "Oriental Dancing",
      group: "Ord. Level",
    },
    {
      value: "Ord. Level - Bharatha Dancing",
      label: "Bharatha Dancing",
      group: "Ord. Level",
    },
    { value: "Ord. Level - Art", label: "Art", group: "Ord. Level" },
    {
      value: "Ord. Level - Appreciation of English Literary Texts",
      label: "Appreciation of English Literary Texts",
      group: "Ord. Level",
    },
    {
      value: "Ord. Level - Appreciation of Sinhala Literary Texts",
      label: "Appreciation of Sinhala Literary Texts",
      group: "Ord. Level",
    },
    {
      value: "Ord. Level - Appreciation of Tamil Literary Texts",
      label: "Appreciation of Tamil Literary Texts",
      group: "Ord. Level",
    },
    {
      value: "Ord. Level - Appreciation of Arabic Literary Texts",
      label: "Appreciation of Arabic Literary Texts",
      group: "Ord. Level",
    },
    {
      value: "Ord. Level - Drama and Theatre",
      label: "Drama and Theatre",
      group: "Ord. Level",
    },
    {
      value: "Ord. Level - Information & Communication Technology",
      label: "Information & Communication Technology",
      group: "Ord. Level",
    },
    {
      value: "Ord. Level - Agriculture & Food Technology",
      label: "Agriculture & Food Technology",
      group: "Ord. Level",
    },
    {
      value: "Ord. Level - Aquatic Bio-resources Technology",
      label: "Aquatic Bio-resources Technology",
      group: "Ord. Level",
    },
    {
      value: "Ord. Level - Arts & Crafts",
      label: "Arts & Crafts",
      group: "Ord. Level",
    },
    {
      value: "Ord. Level - Home Economics",
      label: "Home Economics",
      group: "Ord. Level",
    },
    {
      value: "Ord. Level - Health & Physical Education",
      label: "Health & Physical Education",
      group: "Ord. Level",
    },
    {
      value: "Ord. Level - Communication & Media Studies",
      label: "Communication & Media Studies",
      group: "Ord. Level",
    },
    {
      value: "Ord. Level - Design & Construction Technology",
      label: "Design & Construction Technology",
      group: "Ord. Level",
    },
    {
      value: "Ord. Level - Design & Mechanical Technology",
      label: "Design & Mechanical Technology",
      group: "Ord. Level",
    },
    {
      value: "Ord. Level - Design, Electrical & Electronic Technology",
      label: "Design, Electrical & Electronic Technology",
      group: "Ord. Level",
    },
    {
      value: "Ord. Level - Electronic Writing & Shorthand",
      label: "Electronic Writing & Shorthand",
      group: "Ord. Level",
    },
  ];
  return (
    <MultiSelect
      className="multiselect"
      mt="xl"
      data={subjectData}
      placeholder="Select subjects"
      clearButtonLabel="Clear selection"
      clearable
      maxSelectedValues={3}
      searchable
      nothingFound="Nothing found"
      transitionDuration={150}
      transition="pop-top-left"
      transitionTimingFunction="ease"
    />
  );
}

export default SubjectList;
