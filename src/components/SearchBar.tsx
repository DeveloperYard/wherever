import React, {useState, useRef, ChangeEvent, KeyboardEvent} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './SearchBar.module.scss';
import {Search} from 'react-bootstrap-icons';

const SearchBar = () => {

  const [text, setText] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const handleMessage = () => {
    if(text === ''){
      return alert('검색어를 입력해주세요');
    }
    // 메시지 전송하는 부분 구현
    // 라우팅 구현!!!
    // setText(''); // 메시지 전송 후 input 빈값으로 수정
    // inputRef?.current?.focus(); // 메시지 전송 후 input 포커스
    setText('');
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter'){
      handleMessage();
    }
  }
  
  return (
    <div className={styles.searchBox}>
      <Form.Control 
        className={styles.inputArea}
        placeholder='어디로 갈까요?' 
        onChange={onChange}
        value={text}
        ref={inputRef}
        onKeyDown={handleKeyPress}
      />
      <Button 
        className={styles.buttonArea}
        onClick={handleMessage}>
        <Search/>
      </Button>
    </div>
  )
}

export default SearchBar