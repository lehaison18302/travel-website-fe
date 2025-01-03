const Information = () => {
    const changeTabPosition = (e) => {
      setTabPosition(e.target.value);
    };
    return (
      <div className="account-infor-container">
        <div className="account-info-menu">
          <Tabs
            title="abc"
            size="large"
            tabPosition={tabPosition}
            items={listMenu}
          />
        </div>
        <div className="account-info-setting"></div>
      </div>
    );
  };
  
  export default Information;