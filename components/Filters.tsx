interface Props {
  categories: any[];
  onChange: (categoryId?: string) => void;
}

export default function Filters({ categories, onChange }: Props) {
  return (
    <select onChange={(e) => onChange(e.target.value || undefined)}>
      <option value="">All Categories</option>
      {categories.map((cat) => (
        <option key={cat.id} value={cat.id}>
          {cat.name}
        </option>
      ))}
    </select>
  );
}
