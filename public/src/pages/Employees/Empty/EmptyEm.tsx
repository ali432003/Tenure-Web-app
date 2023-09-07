export default function EmployeesEm() {
  return (
    <div className="flex h-min-screen">
      <div className="w-5/6 ms-5">
        <div className="flex flex-col items-center place-content-center mt-12">
          <div className="mt-11">
            <img src="src/assets/icons/board.svg" alt="" />
          </div>
          <div className="mt-5">
            <p className="text-center" style={{ color: 'grey' }}>
              You have not added any employees yet. Click the button below to start adding employees{' '}
            </p>
            <li className="list-none p-2 rounded-lg active flex w-1/4 text-start mx-auto mt-4">
              <img src="src/assets/icons/add_2.svg" alt="" className="me-1" />
              <a href="">Add Employees</a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
