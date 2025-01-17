/* Home Page cards */
        const toolsData = [
            { title: 'Raya Ticket System', description: 'Calls & Requests.', url: 'https://raya-atmtickets.com/login', class: 'commonContent content' },
            { title: 'Oracle Fusion HCM', description: 'Employee Portal.', url: 'https://fa-ewrh-saasfaprod1.fa.ocs.oraclecloud.com/', class: 'commonContent content' },
            { title: 'HR Self Service', description: 'HR Self Service.', url: 'https://hrselfservice.rayacorp.com/HRSelfService/logon.aspx', class: 'commonContent content' },
            { title: 'Diebold Portal', description: 'Courses and Certifications', url: 'https://diebold.learn.taleo.net/', class: 'commonContent content' },
            { title: 'Journal Error Codes', description: 'DN Journal Error Codes.', url: 'https://example.com/pin-pad', class: 'commonContent content' },
            { title: 'Golden Images', description: 'Updated.', url: 'https://docs.google.com/spreadsheets/d/1Ic6xh5vVGQDpIBgUJI4iN8BO1oCqepCLoa5nC6V8AF4/edit#gid=725233425', class: 'commonContent content' },
            { title: 'Check listes', description: 'Updated.', url: 'https://drive.google.com/drive/u/0/folders/1maW9l23lWX48MAjbT_fTx6obDKMtnSd2', class: 'commonContent content' },
            { title: 'Cassette Configration', description: 'Updated.', url: 'https://docs.google.com/spreadsheets/d/19P41_qdESPnAjFbFwBFGdmpPzulB_GQdgcRHG1I9vMs/edit#gid=0', class: 'commonContent content' },
            { title: 'DN Diagnoses', description: 'DN QR Codes errors description DN WebPage', url: 'https://dnsa.dieboldnixdorf.com/', class: 'commonContent content' },
        ];

        const toolsContainer = document.getElementById('tools-container');
        toolsData.forEach(tool => {
            const wrapper = document.createElement('div');
            wrapper.className = tool.class;
            const link = document.createElement('a');
            link.href = tool.url;
            link.target = '_blank';
            link.className = 'card';
            const label = document.createElement('div');
            label.className = 'label';
            label.textContent = tool.title;
            link.appendChild(label);
            const description = document.createElement('div');
            description.className = 'description';
            description.textContent = tool.description;
            link.appendChild(description);
            wrapper.appendChild(link);
            toolsContainer.appendChild(wrapper);
        });