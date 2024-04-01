import {Node} from '../Components/SelectableTree/Components/TreeNode';

const treeData: Node[] = [
  {
    id: 2,
    name: 'Mobile Phones',
    children: [
      {
        id: 3,
        name: 'Apple',
        children: [
          {
            id: 4,
            name: 'iPhone 8',
            children: [
              {
                id: 5,
                name: '128 GB',
                children: [],
              },
              {
                id: 6,
                name: '256 GB',
                children: [],
              },
            ],
          },
          {
            id: 7,
            name: 'iPhone X',
            children: [
              {
                id: 8,
                name: '64 GB',
                children: [],
              },
              {
                id: 9,
                name: '128 GB',
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 10,
        name: 'Nokia',
        children: [
          {
            id: 11,
            name: 'Nokia 6',
            children: [
              {
                id: 12,
                name: '32 GB',
                children: [],
              },
              {
                id: 13,
                name: '64 GB',
                children: [],
              },
            ],
          },
          {
            id: 14,
            name: 'Nokia 7',
            children: [
              {
                id: 15,
                name: '64 GB',
                children: [],
              },
              {
                id: 16,
                name: '128 GB',
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 31,
        name: 'Samsung',
        children: [
          {
            id: 32,
            name: 'Galaxy S21',
          },
          {
            id: 35,
            name: 'Galaxy Note 20',
            children: [
              {
                id: 36,
                name: '256 GB',
                children: [],
              },
              {
                id: 37,
                name: '512 GB',
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 17,
    name: 'Watches',
    children: [
      {
        id: 18,
        name: 'Apple',
        children: [
          {
            id: 19,
            name: 'Apple Watch Series 6',
            children: [
              {
                id: 20,
                name: '40mm',
                children: [],
              },
              {
                id: 21,
                name: '44mm',
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 22,
    name: 'Computers',
    children: [
      {
        id: 23,
        name: 'Apple',
        children: [
          {
            id: 24,
            name: 'MacBook Pro',
            children: [
              {
                id: 25,
                name: '13-inch',
                children: [
                  {
                    id: 26,
                    name: '512 GB',
                    children: [],
                  },
                  {
                    id: 27,
                    name: '1 TB',
                    children: [],
                  },
                ],
              },
              {
                id: 28,
                name: '16-inch',
                children: [
                  {
                    id: 29,
                    name: '1 TB',
                    children: [],
                  },
                  {
                    id: 30,
                    name: '2 TB',
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export {treeData};
