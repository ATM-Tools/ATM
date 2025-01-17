	/* Home Page cards */
        const toolsData = [
            { title: 'Part Request', description: 'part Req. Form.', url: 'Part-Request.html', class: 'commonContent content' },
            { title: 'Live Support', description: 'Live Support Form.', url: 'Live-Support.html', class: 'commonContent content' },
            { title: 'Site Problem', description: 'Site Problem Form.', url: 'Site-Problem.html', class: 'commonContent content' },
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