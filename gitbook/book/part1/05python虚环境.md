# 文件夹 
# cd /Users/gmchen/myfolder/pyenv

```
# 安装
brew install pyenv
# 创建
创建一个名叫gmche的python空环境
virtualenv gmchen

# 选择一个解释器，这里选择的python3
virtualenv -p /usr/local/bin/python3 gmchen

# 激活（进入虚拟环境）
source gmchen/bin/activate

# 退出（回到正常系统环境）
deactivate

# 导出pip列表
pip freeze > requirements.txt

# 安装导出的pip列表（依赖网络环境）
pip install -r requirements.txt

# 正常安装以及网络不好时的安装
pip install balabala
pip install https://pypi.tuna.tsinghua.edu.cn/simple balabala
```