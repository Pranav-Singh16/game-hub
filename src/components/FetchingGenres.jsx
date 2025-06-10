import { useRecoilValue } from "recoil";
import { genres } from "../recoil/index";

const FetchingGenres = () => {
  const results = useRecoilValue(genres);

  // Check if results is an array and not empty
  if (!Array.isArray(results) || results.length === 0) {
    return <div>No genres available</div>;
  }

  return (
    <div>
      {/* {results.map((result) => (
        <div key={result.id || result.name}>{result.name}</div>
      ))} */}
      <div key="1">Result 1</div>
      <div key="2">Result 2</div>
      <div key="3">Result 3</div>
      <div key="4">Result 4</div>
      <div key="5">Result 5</div>
      <div key="6">Result 6</div>
      <div key="7">Result 7</div>
      <div key="8">Result 8</div>
      <div key="9">Result 9</div>
      <div key="10">Result 10</div>
      <div key="11">Result 11</div>
      <div key="12">Result 12</div>
      <div key="13">Result 13</div>
      <div key="14">Result 14</div>
      <div key="15">Result 15</div>
      <div key="16">Result 16</div>
      <div key="17">Result 17</div>
      <div key="18">Result 18</div>
      <div key="19">Result 19</div>
      <div key="20">Result 20</div>
      <div key="21">Result 21</div>
      <div key="22">Result 22</div>
      <div key="23">Result 23</div>
      <div key="24">Result 24</div>
      <div key="25">Result 25</div>
      <div key="26">Result 26</div>
      <div key="27">Result 27</div>
      <div key="28">Result 28</div>
      <div key="29">Result 29</div>
      <div key="30">Result 30</div>
    </div>
  );
};

export default FetchingGenres;
