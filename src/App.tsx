import { useState } from "react";

type Todo = {
	value: string;
	readonly id: number;
	checked: boolean;
	removed: boolean;
};

type Filter = 'all' | 'checked' | 'unchecked' | 'removed';

export const App = () => {
	const [text, setText] = useState('');
	const [todos, setTodos] = useState<Todo[]>([]);
	const [filter, setFilter] = useState<Filter>('all');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
	};
	// todos ステートの更新
	const handleSubmit = () => {
		if (!text) return;

		const newTodo: Todo = {
			value: text,
			id: new Date().getTime(),
			checked: false,
			removed: false,
		}

		setTodos((todos) => [newTodo, ...todos]);
		setText('');
	};
	// タスク編集のコールバック
	const handleEdit = (id: number, value: string) => {
		setTodos((todos) => {
			const newTodos = todos.map((todo) => {
				if (todo.id === id) {
					return {...todo, value: value};
				}
				return todo;
			});
			
			return newTodos;
		});
	};
	// タスク状況（完了/未完）のコールバック
	const handleCheck = (id: number, checked: boolean) => {
		setTodos((todos) => {
			const newTodos = todos.map((todo) => {
				if (todo.id === id) {
					return {...todo, checked};
				}
				return todo;
			});

			return newTodos;
		});
	};
	// 削除のコールバック
	const handleRemove = (id: number, removed: boolean) => {
		setTodos((todos) => {
			const newTodos = todos.map((todo) => {
				if (todo.id === id) {
					return {...todo, removed};
				}
				return todo;
			});

			return newTodos;
		});
	};
	// フィルタリングのコールバック
	const handleSort = (filter: Filter) => {
		setFilter(filter);
	};
	// フィルタリングしたtodosを取得
	const filteredTodos = todos.filter((todo) => {
		// filter ステートの値に応じて異なる内容の配列を返す
		switch (filter) {
			case 'all':
				return !todo.removed;

			case 'checked':
				return todo.checked && !todo.removed;

			case 'unchecked':
				return !todo.checked && !todo.removed;

			case 'removed':
				return todo.removed;
			
			default:
				return todo;
		}
	});
	// ゴミ箱を空にする関数
	const handleEmpty = () => {
		// シャローコピーで事足りる
		setTodos((todos) => todos.filter((todo) => !todo.removed));
	};

	return (
		<div>
			<select  
				defaultValue="all" 
				onChange={(e) => handleSort(e.target.value as Filter)}
			>
				<option value="all">すべてのタスク</option>
				<option value="checked">完了したタスク</option>
				<option value="unchecked">現在のタスク</option>
				<option value="removed">ゴミ箱</option>
			</select>
			{filter === 'removed' ? (
				<button 
					onClick={handleEmpty}
					disabled={todos.filter((todo) => todo.removed).length === 0}
				>
					ゴミ箱を空にする
				</button>
			) : (
				filter !== 'checked' && (
					<form 
						onSubmit={(e) => {
							e.preventDefault();
							handleSubmit();
						}}
					>
						<input type="text" value={text} onChange={(e) => handleChange(e)} />
						<input type="submit" value="追加" onSubmit={handleSubmit} />
					</form>
				)
			)}
			<ul>
				{filteredTodos.map((todo) => {
					return (
						<li key={todo.id}>
							<input 
								type="checkbox"
								disabled={todo.removed}
								checked={todo.checked}
								onChange={() => handleCheck(todo.id, !todo.checked)}
							/>
							<input 
								type="text"
								disabled={todo.checked || todo.removed}
								value={todo.value}
								onChange={(e) => handleEdit(todo.id, e.target.value)}
							/>
							<button onClick={() => handleRemove(todo.id, !todo.removed)}>
								{todo.removed ? '復元' : '削除'}
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
