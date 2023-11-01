/**
 * hooks
 */
import useSearch from '@/core/hook/useSearch'
/**
 * components
 */
import Input from '../Input/input';

export default function Search() {
  const {isError, handleChange} = useSearch()

  return (
    <Input
      id='search'
      placeholder="Введите Id или ids c ,"
      label="Поиск сотрудников"
      onChange={handleChange}
      errorMessage={isError ? 'что-то не так, пожалуйста, введите правильные параметры' : ''}
    />
  );
}
