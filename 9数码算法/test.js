function EightPuzzles(option) {
    this.queue = []
    this.hash = {}
    this.prevVertx = {}
    this.startNode = this.currentNode = option.startNode
    this.startNodeStr = this.startNode.toString().split(',').join('')
    this.endNode = option.endNode
    this.endNodeStr = this.endNode.toString().split(',').join('')
    this.isFind = false
    this.timer = option.animateTime || 1000
}
EightPuzzles.prototype.calDom = function(node) {
    node.forEach(function(item, index) {
        item.forEach(function(obj, i) {
            $('#' + obj).css({left: i * 50, top: index* 50})
        })
    })
}
EightPuzzles.prototype.showDomMove = function(path, arr) {
    var _ = this
    path.forEach(function(item, index) {
        setTimeout(function(node) {
            arr[index] && ($('.context')[0].innerHTML += '<div>' + arr[index] + '</div>')
            this.calDom(node)
        }.bind(_, item), index * _.timer)
    })
}
EightPuzzles.prototype.solveEightPuzzles = function() {
    if(this.isCanMoveToEnd(this.startNode, this.endNode)) {
        var _ = this
        this.queue.push(this.startNode)
        this.hash[this.startNodeStr] = this.startNode
        while(!this.isFind) { 
            if(!this.queue.length) {
                alert('没搜索到结果')
                return
            }
            var currentNode = this.queue.shift(),
                currentNodeStr = currentNode.toString().split(',').join('')
            if(_.endNodeStr === currentNodeStr) {
                var path = [];
                var pathStep = [];
                for (var v = _.endNodeStr; v != _.startNodeStr; v = _.prevVertx[v]) {
                    path.unshift(_.hash[v])
                    pathStep.unshift(v)
                }
                path.unshift(_.hash[_.startNodeStr])
                pathStep.unshift(_.startNodeStr)
                var arr = _.moveStep(pathStep)
                _.showDomMove(path, arr)
                _.isFind = true
                return
            }
            result = this.getChildNodes(currentNode)
            result.forEach(function (item, i) {
                var itemStr = item.toString().split(',').join('')
                if (!_.hash[itemStr]) {
                    _.queue.push(item)
                    _.hash[itemStr] = item
                    _.prevVertx[itemStr] = currentNodeStr
                }
                
            })
        }
    } else {
        alert('无法进行变换得到结果')
    }
    
}
EightPuzzles.prototype.isCanMoveToEnd = function(startNode, endNode) {
    startNode = startNode.toString().split(',')
    endNode = endNode.toString().split(',')
    if(this.calParity(startNode) === this.calParity(endNode)) {
        return true 
    } else {
        return false
    }
}
EightPuzzles.prototype.calParity = function(node) {
    var num = 0
    node.forEach(function(item, index) {
        for(var i = 0; i < index; i++) {
            if(node[i] != 0) {
                if (node[i] < item) {
                    num++
                } 
            }
        }
    })
    if(num % 2) {
        return 1
    } else {
        return 0
    }
}
EightPuzzles.prototype.getChildNodes = function (currentNode) {
    if(!Array.isArray(currentNode)) return
    var target = {},
        childNodesArr = [],
        direction = [],
        rowNum = currentNode.length,
        colNum = currentNode[0].length
    currentNode.forEach(function(item, i) {
        item.forEach(function(obj, k) {
            if(obj === 0) {
                target = {x: k, y: i}
            }
        })
    })
    direction = this.getDirection(target, rowNum, colNum)
    return this.changePosition(currentNode, target, direction)
}

EightPuzzles.prototype.getDirection = function (target, rowNum, colNum) {
    var direction = []
    if (!target.x) {
        direction.push('right')
    } else if (target.x === colNum - 1) {
        direction.push('left')
    } else {
        direction = direction.concat(['left', 'right'])
    }
    
    if (!target.y) {
        direction.push('down')
    } else if (target.y === rowNum - 1) {
        direction.push('up')
    } else {
        direction = direction.concat(['down', 'up'])
    }
    return direction
}

EightPuzzles.prototype.changePosition = function (node, target, direction) {
    if(direction.length) {
        var childNodesArr = []
        direction.forEach(function(item, index) {
            var temp
            var _node = JSON.parse(JSON.stringify(node))
            switch(item)
                {
                    case 'left':
                        temp = _node[target.y][target.x]
                        _node[target.y][target.x] = _node[target.y][target.x - 1] 
                        _node[target.y][target.x - 1] = temp 
                        break
                    case 'right':
                        temp = _node[target.y][target.x]
                        _node[target.y][target.x] = _node[target.y][target.x + 1]
                        _node[target.y][target.x + 1] = temp 
                        break
                    case 'down':
                        temp = _node[target.y][target.x]
                        _node[target.y][target.x] = _node[target.y + 1][target.x]
                        _node[target.y + 1][target.x] = temp
                        break
                    case 'up':
                        temp = _node[target.y][target.x]
                        _node[target.y][target.x] = _node[target.y - 1][target.x]
                        _node[target.y - 1][target.x] = temp
                        break
                }
            childNodesArr.push(_node)
        })
        return childNodesArr
    }
}
EightPuzzles.prototype.moveStep = function (path) {
    var stepContext = [];
    while (path.length > 1) {
        var index = path[0].indexOf('0')
        var num = path[0][path[1].indexOf('0')]
        path.shift()
        var _step = stepContext.length + 1
        var cow = parseInt(index / 3)
        var col = index % 3
        var str = '第' + _step + '步:' + '数字' + num + '移动至空位' + cow  + col
        stepContext.push(str)
    }
    return stepContext
}